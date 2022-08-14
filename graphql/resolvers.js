const bcrypt = require("bcrypt");
const User = require("../models/User");
const products = require("../utils/Product");

module.exports = {
  createUser: async function (args, req) {
    const { name, email, password } = args.userInput;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      const error = new Error("User already exists");
      throw error;
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    const savedUser = await user.save();

    return { ...savedUser._doc, _id: savedUser._id.toString() };
  },

  hello() {
    return "hello world";
  },

  users: async function (args, req) {
    const users = await User.find();
    return users;
  },

  products: function (args, req) {
    const selectedProducts = products.slice(
      args.productInput.offset,
      args.productInput.first + args.productInput.offset
    );

    return selectedProducts;
  },
};
