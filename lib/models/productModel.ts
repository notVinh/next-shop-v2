import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  brand: { type: String },
  id: { type: Number, required: true },
  type: { type: String },
  status: { type: String },
  price: { type: Number },
  amount: { type: Number },
  name: { type: String, required: true },
  gentle: { type: String, default: "unisex" },
  image: { type: String },
  subimage: { type: [String] },
  size: { type: [String] },
  color: { type: [String] },
  desc: { type: String },
  instock: { type: Boolean, default: true },
  active: { type: Boolean, default: false },
});

const ProductModel =
  mongoose.models.product || mongoose.model("product", ProductSchema);

export default ProductModel;
