// lib/config/db.js
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_URL;

// Kiểm tra xem MONGODB_URI đã được định nghĩa chưa
if (!MONGODB_URI) {
  throw new Error(
    "Vui lòng định nghĩa biến môi trường MONGO_URL trong file .env.local"
  );
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route development.
 */
// eslint-disable-next-line no-var

// declare global {
//   var mongoose: {
//     conn: typeof mongoose | null;
//     promise: Promise<typeof mongoose> | null;
//   };
// }

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connect() {
  // Nếu đã có kết nối cached, trả về ngay
  if (cached.conn) {
    console.log("Sử dụng kết nối MongoDB đã cache.");
    return cached.conn;
  }

  // Nếu chưa có promise kết nối, tạo mới
  if (!cached.promise) {
    const opts = {
      bufferCommands: false, // Tắt buffering để lỗi được trả về ngay nếu không kết nối được
    };

    cached.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then((mongooseInstance) => {
        console.log("Kết nối MongoDB thành công!");
        return mongooseInstance;
      })
      .catch((err) => {
        // Hủy promise nếu kết nối thất bại để lần sau thử lại
        cached.promise = null;
        console.error("Lỗi khi kết nối MongoDB:", err);
        // Ném lỗi để đảm bảo API route biết có vấn đề
        throw new Error(`Không thể kết nối đến cơ sở dữ liệu: ${err.message}`);
      });
  }

  // Chờ promise kết nối hoàn thành
  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (err) {
    // Lỗi đã được xử lý trong .catch() của promise, chỉ ném lại
    throw err;
  }
}

export default connect;
