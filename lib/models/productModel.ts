import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  brand: { type: String, required: true },
  type: { type: String, required: true },
  price: { type: Number, required: true },
  size: { type: [String] },
  color: { type: [String] },
  desc: { type: String },
  status: { type: String, required: true },
  img: { type: String },
  img1: { type: String },
  img2: { type: String },
  img3: { type: String },
  img4: { type: String },
  img5: { type: String },
  img6: { type: String },
  img7: { type: String },
});

const ProductModel =
  mongoose.models.product || mongoose.model("product", ProductSchema);

export default ProductModel;
