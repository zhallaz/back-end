import mongoose from "mongoose";
import dotenv from "dotenv";
import foodModel from "./models/foodModel.js";
import { connectDB } from "./config/db.js"; // Note: If your DB connection function inside the config folder has a different file name (e.g. dbConfig.js) or name, change this import path to match it!

// Load environment variables (.env)
dotenv.config();

// Paste your actual frontend assets food list array here!
const food_list = [
  {
    name: "Ceaser Salad",
    image: "food_1.png",
    price: 12,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Salads",
  },
  {
    name: "Italian Salad",
    image: "food_2.png",
    price: 18,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Salads",
  },
  {
    name: "Spinach Salad",
    image: "food_3.png",
    price: 16,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Salads",
  },
  {
    name: "Chicken Salad",
    image: "food_4.png",
    price: 24,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Salads",
  },
  {
    name: "Lasagna Rolls",
    image: "food_5.png",
    price: 14,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Rolls",
  },
  {
    name: "Peri Peri Rolls",
    image: "food_6.png",
    price: 12,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Rolls",
  },
  {
    name: "Chicken Rolls",
    image: "food_7.png",
    price: 20,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Rolls",
  },
  {
    name: "Veg Rolls",
    image: "food_8.png",
    price: 15,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Rolls",
  },
  {
    name: "Ripple Ice Cream",
    image: "food_9.png",
    price: 14,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Deserts",
  },
  {
    name: "Fruit Ice Cream",
    image: "food_10.png",
    price: 22,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Deserts",
  },
  {
    name: "Jar Ice Cream",
    image: "food_11.png",
    price: 10,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Deserts",
  },
  {
    name: "Vanilla Ice Cream",
    image: "food_12.png",
    price: 12,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Deserts",
  },
  {
    name: "Chicken Sandwich",
    image: "food_13.png",
    price: 12,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Sandwiches",
  },
  {
    name: "Vegan Sandwich",
    image: "food_14.png",
    price: 18,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Sandwiches",
  },
  {
    name: "Grilled Sandwich",
    image: "food_15.png",
    price: 16,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Sandwiches",
  },
  {
    name: "Italian Sub",
    image: "food_16.png",
    price: 24,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Sandwiches",
  },
  {
    name: "Cup Cake",
    image: "food_17.png",
    price: 14,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Cakes",
  },
  {
    name: "Vegan Cake",
    image: "food_18.png",
    price: 12,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Cakes",
  },
  {
    name: "Butterscotch Cake",
    image: "food_19.png",
    price: 20,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Cakes",
  },
  {
    name: "Sliced Cake",
    image: "food_20.png",
    price: 15,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Cakes",
  },
  {
    name: "Garlic Mushroom ",
    image: "food_21.png",
    price: 14,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Vegetarian",
  },
  {
    name: "Fried Cauliflower",
    image: "food_22.png",
    price: 22,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Vegetarian",
  },
  {
    name: "Mix Veg Pulao",
    image: "food_23.png",
    price: 10,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Vegetarian",
  },
  {
    name: "Rice Zucchini",
    image: "food_24.png",
    price: 12,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Vegetarian",
  },
  {
    name: "Fettuccine Alfredo",
    image: "food_25.png",
    price: 12,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Pastas",
  },
  {
    name: "Tomato Pasta",
    image: "food_26.png",
    price: 18,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Pastas",
  },
  {
    name: "Creamy Pasta",
    image: "food_27.png",
    price: 16,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Pastas",
  },
  {
    name: "Chicken Pasta",
    image: "food_28.png",
    price: 24,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Pastas",
  },
  {
    name: "Buttter Noodles",
    image: "food_29.png",
    price: 14,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Noodles",
  },
  {
    name: "Veg Noodles",
    image: "food_30.png",
    price: 12,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Noodles",
  },
  {
    name: "Somen Noodles",
    image: "food_31.png",
    price: 20,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Noodles",
  },
  {
    name: "Cooked Noodles",
    image: "food_32.png",
    price: 15,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Noodles",
  },

  // TODO: Open your "front-end/src/assets/assets.js" file, copy the rest of the items from your food_list array, and paste them here!
];

const seedDatabase = async () => {
  try {
    // 1. Connect to your database
    await connectDB();
    console.log("Database connected successfully for seeding...");

    // 2. Clear out any existing data (clears the duplicates)
    await foodModel.deleteMany({});
    console.log("Old database items cleared.");

    // 3. Insert the brand new 50+ unique items
    await foodModel.insertMany(food_list);
    console.log(`Successfully seeded ${food_list.length} food items into your database!`);

    // 4. Close database connection cleanly
    mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
