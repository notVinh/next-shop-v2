import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  phone: { type: String },
  address: { type: String },
  country: { type: String },
  city: { type: String },
  state: { type: String },
  total: { type: Number },
  method: { type: String },
  isPayment: { type: Boolean },
  products: { type: [] },
  progress: {
    type: String,
    enum: ["pending", "confirm", "shipping", "delivered"],
    default: "pending",
  },
});

const OrderModel =
  mongoose.models.order || mongoose.model("order", OrderSchema);

export default OrderModel;
