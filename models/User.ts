import mongoose, { Schema, InferSchemaType, models, model } from "mongoose";

const addressSchema = new Schema({
  street: String,
  city: String,
  state: String,
  zip: String,
});

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    age: { type: Number, min: 0 },
    role: { type: String, enum: ["admin", "moderator", "user"], default: "user" },
    isActive: { type: Boolean, default: true },
    address: addressSchema,
    hobbies: [String],
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

// Prevent recompilation in Next.js hot reloads
export type User = InferSchemaType<typeof userSchema>;
export default models.User || model("User", userSchema);
