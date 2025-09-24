import mongoose from "mongoose";

let isConnected = false; // để theo dõi trạng thái kết nối

export const connectDB = async () => {
  if (isConnected) {
    console.log("✅ MongoDB đã kết nối (reuse connection)");
    return;
  }

  try {
    const conn = await mongoose.connect(process.env.MONGO_URL as string, {
      //   dbName: process.env.MONGODB_DB, // tuỳ chọn
    });

    isConnected = conn.connections[0].readyState === 1;
    console.log("🚀 MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw new Error("MongoDB connection failed");
  }
};
