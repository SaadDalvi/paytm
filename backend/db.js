const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect(
  "mongodb+srv://saadUser:Flamingo%407@cluster0.ai3ql.mongodb.net/paytm"
);

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("users", userSchema);

const accountSchema = new Schema({
  userId: { type: mongoose.Types.ObjectId, ref: "users", required: true },
  balance: { type: Number, required: true },
});

const Account = mongoose.model("accounts", accountSchema);

module.exports = { User, Account };
