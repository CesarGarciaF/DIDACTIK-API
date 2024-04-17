import { Schema, model } from "mongoose";

const roleSchema = new Schema(
  {
    role: {
      type: String,
    },
  },
  { timestamps: true }
);

const Role = model("Role", roleSchema);

export default Role;
