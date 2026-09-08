const fs = require('fs');
const path = require('path');
const initSqlJs = require('sql.js');

const dbPath = path.join(__dirname, '..', 'database', 'restaurant.sqlite');
const schemaPath = path.join(__dirname, '..', 'database', 'schema.sql');

let database;
let readyPromise;

async function initDatabase() {
  if (readyPromise) {
    return readyPromise;
  }

  readyPromise = (async () => {
    const SQL = await initSqlJs({
      locateFile: (fileName) => path.join(__dirname, 'node_modules', 'sql.js', 'dist', fileName)
    });

    if (fs.existsSync(dbPath)) {
      const fileBuffer = fs.readFileSync(dbPath);
      database = new SQL.Database(fileBuffer);
    } else {
      database = new SQL.Database();
    }

    const schema = fs.readFileSync(schemaPath, 'utf8');
    database.exec(schema);
    persistDatabase();
  })();

  return readyPromise;
}

function persistDatabase() {
  const data = database.export();
  const buffer = Buffer.from(data);
  fs.writeFileSync(dbPath, buffer);
}

function run(sql, params = [], options = {}) {
  const statement = database.prepare(sql);
  statement.run(params);
  statement.free();

  if (options.persist !== false) {
    persistDatabase();
  }
}

function get(sql, params = []) {
  const statement = database.prepare(sql);
  statement.bind(params);
  const row = statement.step() ? statement.getAsObject() : undefined;
  statement.free();
  return row;
}

function all(sql, params = []) {
  const statement = database.prepare(sql);
  statement.bind(params);
  const rows = [];

  while (statement.step()) {
    rows.push(statement.getAsObject());
  }

  statement.free();
  return rows;
}

function transaction(executor) {
  database.run('BEGIN TRANSACTION');

  try {
    const result = executor();
    database.run('COMMIT');
    persistDatabase();
    return result;
  } catch (error) {
    database.run('ROLLBACK');
    throw error;
  }
}

module.exports = {
  initDatabase,
  run,
  get,
  all,
  transaction
};
