import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://dqv166:1412Vinh@quangvinh.kslpeou.mongodb.net/Nashieshop?retryWrites=true&w=majority"
  );
  console.log("DB connected");
};
// "mongodb+srv://dqv166:1412Vinh@quangvinh.kslpeou.mongodb.net/dathealth?retryWrites=true&w=majority"
