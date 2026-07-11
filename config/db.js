import dns from "node:dns";
import mongoose from "mongoose";

// Force Node.js internal resolver to bypass local/ISP DNS blocks
dns.setServers(["1.1.1.1", "8.8.8.8"]);

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ezejichinemerem:Chinemerem%401@cluster0.pmaz7zk.mongodb.net/zhallaz-del",
    );
    console.log("DB Connected Successfully");
  } catch (error) {
    console.error("Database connection failed:", error.message);
  }
};
