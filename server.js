const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('./db');

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'frontend')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});

app.get('/health', (req, res) => {
  res.json({ ok: true });
});

app.get('/orders', (req, res) => {
  const orders = db.all('SELECT * FROM orders ORDER BY id DESC');
  res.json(orders);
});

app.get('/orders/:id', (req, res) => {
  const order = db.get('SELECT * FROM orders WHERE id = ?', [req.params.id]);

  if (!order) {
    return res.status(404).json({ message: 'Order not found' });
  }

  const items = db.all('SELECT * FROM order_items WHERE order_id = ? ORDER BY id ASC', [req.params.id]);
  res.json({ ...order, items });
});

app.post('/orders', (req, res) => {
  const { customerName, tableNo, items } = req.body;

  if (!customerName || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({
      message: 'customerName and a non-empty items array are required'
    });
  }

  const normalizedItems = items.map((item) => ({
    itemId: item.id ?? null,
    itemName: String(item.name || '').trim(),
    quantity: Number(item.quantity || 0),
    price: Number(item.price || 0),
    total: Number(item.total || 0)
  }));

  if (normalizedItems.some((item) => !item.itemName || item.quantity <= 0 || item.price < 0)) {
    return res.status(400).json({ message: 'Each item must have a valid name, quantity, and price' });
  }

  const subtotal = normalizedItems.reduce((sum, item) => sum + item.total, 0);
  const gst = Number((subtotal * 0.05).toFixed(2));
  const serviceCharge = Number((subtotal * 0.10).toFixed(2));
  const grandTotal = Number((subtotal + gst + serviceCharge).toFixed(2));

  const orderId = db.transaction(() => {
    db.run(
      'INSERT INTO orders (customer_name, table_no, subtotal, gst, service_charge, grand_total) VALUES (?, ?, ?, ?, ?, ?)',
      [customerName, tableNo || null, subtotal, gst, serviceCharge, grandTotal],
      { persist: false }
    );

    const savedOrder = db.get('SELECT last_insert_rowid() AS id');

    for (const item of normalizedItems) {
      db.run(
        'INSERT INTO order_items (order_id, item_id, item_name, quantity, price, total) VALUES (?, ?, ?, ?, ?, ?)',
        [savedOrder.id, item.itemId, item.itemName, item.quantity, item.price, item.total],
        { persist: false }
      );
    }

    return savedOrder.id;
  });

  const savedOrder = db.get('SELECT * FROM orders WHERE id = ?', [orderId]);
  const savedItems = db.all('SELECT * FROM order_items WHERE order_id = ? ORDER BY id ASC', [orderId]);

  res.status(201).json({ ...savedOrder, items: savedItems });
});

db.initDatabase()
  .then(() => {
    const startServer = (currentPort) => {
      app.listen(currentPort, () => {
        console.log(`Backend running on http://localhost:${currentPort}`);
      }).on('error', (error) => {
        if (error.code === 'EADDRINUSE') {
          console.warn(`Port ${currentPort} is busy. Trying ${currentPort + 1}...`);
          startServer(currentPort + 1);
        } else {
          console.error('Server error:', error);
          process.exit(1);
        }
      });
    };

    startServer(port);
  })
  .catch((error) => {
    console.error('Failed to initialize database:', error);
    process.exit(1);
  });
