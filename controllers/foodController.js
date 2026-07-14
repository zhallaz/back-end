import foodmodel from "../models/foodModel.js";
import fs from "fs";

// add food items //

const addFood = async (req, res) => {
  if (!req.file) {
    return res.json({
      success: false,
      message: "Multer failed: No file was received by the backend.",
    });
  }
  let image_filename = `${req.file.filename}`;

  const food = new foodmodel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });
  try {
    await food.save();
    res.json({ success: true, message: "Food Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// all food list //
const listFood = async (req, res) => {
  try {
    const foods = await foodmodel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};
// remove food item

const removeFood = async (req, res) => {
  try {
    const food = await foodmodel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`, () => {});
    await foodmodel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};
// seed database with bulk food list //
const seedFood = async (req, res) => {
  try {
    await foodmodel.deleteMany({});
    const foodList = req.body;
    await foodmodel.insertMany(foodList);

    res.json({ success: true, message: "Database seeded with all items successfully!" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error seeding database" });
  }
};

export { addFood, listFood, removeFood };
