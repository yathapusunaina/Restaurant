// Restaurant Menu Data
const menuData = [
  // ==================== STARTERS ====================
  {
    id: 1,
    name: "Crispy Spring Rolls",
    category: "Starters",
    description: "Golden fried spring rolls with sweet & spicy sauce",
    image: src= "images/Crispy Spring Rolls.jpg",
    price: 120,
    tag: "veg",
    special: false
  },
  {
    id: 2,
    name: "Garlic Bread",
    category: "Starters",
    description: "Toasted bread with garlic butter and herbs",
    image: src= "images/Garlic Bread.jpg",
    price: 90,
    
    tag: "veg",
    special: false
  },
  {
    id: 3,
    name: "Chicken Tikka",
    category: "Starters",
    description: "Tender chicken pieces marinated in yogurt and spices",
    image: src= "images/Chicken Tikka.jpg",
    price: 180,
    
    tag: "non-veg",
    special: true
  },
  {
    id: 4,
    name: "Paneer 65",
    category: "Starters",
    description: "Crispy fried paneer with spicy coating",
    image: src= "images/Paneer 65.jpg",
    price: 140,
    
    tag: "veg",
    special: false
  },
  {
    id: 5,
    name: "Veggie Tempura",
    category: "Starters",
    description: "Japanese-style battered vegetables",
    image: src= "images/Veggie Tempura.jpg",  
    price: 110,

    tag: "veg",
    special: false
  },
  {
    id: 6,
    name: "Loaded Nachos",
    category: "Starters",
    description: "Crispy nachos with cheese, jalapeños, and sour cream",
    image: src= "images/Loaded Nachos.jpg",
    price: 160,
    
    tag: "veg",
    special: false
  },
  {
    id: 8,
    name: "Cheese Samosa",
    category: "Starters",
    description: "Crispy pastry filled with paneer and cheese",
    image: src= "images/Cheese Samosa.jpg",
    price: 100,
   
    tag: "veg",
    special: false
  },

  // ==================== MAIN COURSE ====================
  {
    id: 9,
    name: "Butter Chicken",
    category: "Main Course",
    description: "Tender chicken in creamy tomato-based sauce",
    image: src= "images/Butter Chicken.jpg",
    price: 280,
    
    tag: "non-veg",
    special: true
  },
  {
    id: 10,
    name: "Paneer Butter Masala",
    category: "Main Course",
    description: "Soft paneer cubes in rich buttery tomato sauce",
    image: src= "images/Paneer Butter Masala.jpg",
    price: 220,
   
    tag: "veg",
    special: false
  },
  {
    id: 11,
    name: "Chicken Biryani",
    category: "Main Course",
    description: "Aromatic rice with tender chicken and spices",
    image: src= "images/Chicken Biryani.jpg",
    price: 250,
    
    tag: "non-veg",
    special: true
  },
  {
    id: 12,
    name: "Vegetable Biryani",
    category: "Main Course",
    description: "Fragrant rice layered with seasonal vegetables",
    image: src= "images/Vegetable Biryani.jpg",
    price: 180,
    
    tag: "veg",
    special: false
  },

  
  {
    id: 15,
    name: "Tandoori Chicken",
    category: "Main Course",
    description: "Grilled chicken marinated in yogurt and spices",
    image: src= "images/Tandoori Chicken.jpg",
    price: 290,
    
    tag: "non-veg",
    special: false
  },
  {
    id: 16,
    name: "Dal Makhani",
    category: "Main Course",
    description: "Creamy black lentils tempered with butter and cream",
    image: src= "images/Dal Makhani.jpg",
    price: 160,
    
    tag: "veg",
    special: false
  },

  // ==================== BURGERS ====================
  {
    id: 17,
    name: "Classic Cheeseburger",
    category: "Burgers",
    description: "Juicy beef patty with melted cheese and pickles",
    image: src= "images/Classic Cheeseburger.jpg",
    price: 200,
    tag: "non-veg",
    special: false
  },
  
  {
    id: 20,
    name: "Spicy Fried Chicken Burger",
    category: "Burgers",
    description: "Crispy fried chicken breast with jalapeños and mayo",
    image: src= "images/Spicy Fried Chicken Burger.jpg",
    price: 220,
    tag: "non-veg",
    special: false
  },
  
  // ==================== PIZZA ====================
  {
    id: 25,
    name: "Margherita",
    category: "Pizza",
    description: "Classic pizza with tomato, mozzarella, and basil",
    image: src= "images/Margherita.jpg",
    price: 250,
    tag: "veg",
    special: false
  },
  
  {
    id: 27,
    name: "Veggie Paradise",
    category: "Pizza",
    description: "Bell peppers, onions, mushrooms, and tomatoes",
    image: src= "images/Veggie Paradise.jpg",
    price: 260,
    tag: "veg",
    special: false
  },
  {
    id: 28,
    name: "Chicken BBQ",
    category: "Pizza",
    description: "Grilled chicken with BBQ sauce and red onions",
    image: src= "images/Chicken BBQ.jpg",
    price: 290,
    tag: "non-veg",
    special: true
  },
  
  {
    id: 32,
    name: "Seafood Delight",
    category: "Pizza",
    description: "Shrimp, mussels, clams, and garlic",
    image: src= "images/Seafood Delight.jpg",
    price: 340,
    tag: "non-veg",
    special: false
  },

  // ==================== PASTA ====================
  {
    id: 34,
    name: "Penne Arrabbiata",
    category: "Pasta",
    description: "Spicy tomato and garlic sauce with a kick",
    image: src= "images/Penne Arrabbiata.jpg",
    price: 200,
    tag: "veg",
    special: false
  },
  {
    id: 35,
    name: "Fettuccine Alfredo",
    category: "Pasta",
    description: "Ribbon pasta in creamy parmesan sauce",
    image: src= "images/Fettuccine Alfredo.jpg",
    price: 220,
    tag: "veg",
    special: false
  },
  
  
  

  // ==================== SALADS ====================
  
  {
    id: 42,
    name: "Chicken Caesar Salad",
    category: "Salads",
    description: "Caesar salad topped with grilled chicken",
    image: src= "images/Chicken Caesar Salad.jpg",
    price: 240,
    tag: "non-veg",
    special: false
  },
  
  {
    id: 47,
    name: "Caprese Salad",
    category: "Salads",
    description: "Fresh mozzarella, tomatoes, basil, and balsamic",
    image: src= "images/Caprese Salad.jpg",
    price: 210,
    tag: "veg",
    special: false
  },
  

  // ==================== DESSERTS ====================
  {
    id: 49,
    name: "Chocolate Lava Cake",
    category: "Desserts",
    description: "Warm chocolate cake with molten center",
    image: src= "images/Chocolate Lava Cake.jpg",
    price: 140,
    tag: "veg",
    special: true
  },
  {
    id: 50,
    name: "Cheesecake",
    category: "Desserts",
    description: "Classic New York style cheesecake",
    image: src= "images/Cheesecake.jpg",
    price: 130,
    tag: "veg",
    special: false
  },
  {
    id: 51,
    name: "Tiramisu",
    category: "Desserts",
    description: "Traditional Italian dessert with mascarpone",
    image: src= "images/Tiramisu.jpg",
    price: 120,
    tag: "veg",
    special: false
  },
  {
    id: 52,
    name: "Gulab Jamun",
    category: "Desserts",
    description: "Soft milk solids in cardamom syrup",
    image: src= "images/Gulab Jamun.jpg",
    price: 100,
    tag: "veg",
    special: false
  },
  
  {
    id: 54,
    name: "Brownie Sundae",
    category: "Desserts",
    description: "Warm brownie topped with ice cream and chocolate sauce",
    image: src= "images/Brownie Sundae.jpg",
    price: 150,
    tag: "veg",
    special: false
  },
  

  // ==================== BEVERAGES ====================
  {
    id: 57,
    name: "Fresh Orange Juice",
    category: "Beverages",
    description: "Freshly squeezed orange juice",
    image: src= "images/Fresh Orange Juice.jpg",
    price: 80,
    tag: "veg",
    special: false
  },
  {
    id: 58,
    name: "Iced Coffee",
    category: "Beverages",
    description: "Cold brew coffee with ice and cream",
    image: src= "images/Iced Coffee.jpg",
    price: 100,
    tag: "veg",
    special: false
  },
  {
    id: 59,
    name: "Mango Lassi",
    category: "Beverages",
    description: "Yogurt-based mango drink",
    image: src= "images/Mango Lassi.jpg",
    price: 90,
    tag: "veg",
    special: false
  },
  
  {
    id: 61,
    name: "Virgin Mojito",
    category: "Beverages",
    description: "Refreshing mint and lime cooler",
    image: src= "images/Virgin Mojito.jpg",
    price: 110,
    tag: "veg",
    special: false
  },
  {
    id: 62,
    name: "Smoothie Bowl",
    category: "Beverages",
    description: "Thick smoothie with granola and fruits",
    image: src= "images/Smoothie Bowl.jpg",
    price: 120,
    tag: "veg",
    special: false
  },
  {
    id: 63,
    name: "Watermelon Cooler",
    category: "Beverages",
    description: "Chilled watermelon juice with a hint of mint",
    image: src= "images/Watermelon Cooler.jpg",
    price: 85,
    tag: "veg",
    special: false
  },
  {
    id: 64,
    name: "Hot Chocolate",
    category: "Beverages",
    description: "Rich hot chocolate with whipped cream",
    image: src= "images/Hot Chocolate.jpg",
    price: 95,
    tag: "veg",
    special: false
  }
];
