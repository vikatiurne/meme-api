import mongoose, { Document, Schema } from "mongoose";

export interface IMeme extends Document {
  id: number;
  name: string;
  img: string;
  likes: number;
}

const memeSchema: Schema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  img: {
    type: String,
    required: true,
  },
  likes: { type: Number, required: true },
});

const Meme = mongoose.model<IMeme>("Meme", memeSchema);

export default Meme;
