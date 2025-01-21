import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  email: string;
  userName: string;
  name: string;
  password: string;
}
const UserSchema: Schema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
    },
    userName: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export const User = mongoose.model<IUser>("User", UserSchema);
