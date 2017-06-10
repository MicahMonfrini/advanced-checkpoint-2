import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  title: String,
  author: String,
  date: Number,
  publisher: String,
  category: String
});

export default mongoose.model("Book", bookSchema);
