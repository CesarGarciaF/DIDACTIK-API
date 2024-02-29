const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    refreshToken: {
      type: String,
    },
    name: {
      type: String,
    },
    firsName: {
      type: String,
    },
    secondName: {
      type: String,
    },
    sex: {
      type: String,
    },
    age: {
      type: String,
    },
    // nationality,
  },
  { timestamps: true }
);

// userSchema.pre('save', async function (next) {
//     try {
//         const hashedPassword = await bcrypt.hash(this.password, 10);
//         this.password = hashedPassword;
//         next();
//     } catch (error) {
//         next(error);
//     }
// });

const User = mongoose.model("User", userSchema);

module.exports = User;
