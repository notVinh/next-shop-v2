import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  isAdmin: { type: Boolean, default: false },
  isVerified: { type: Boolean, default: false },
  otp: { type: String },
  expiry: { type: Date },
});

const UserModel = mongoose.models.user || mongoose.model("user", UserSchema);

export default UserModel;
