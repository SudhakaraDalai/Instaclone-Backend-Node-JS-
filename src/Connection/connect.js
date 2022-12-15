const mongoose = require("mongoose");

mongoose
  .connect(
    'mongodb+srv://sudhakar:sudhakar768@sudhakar.qf9hq4y.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    console.log("Login successful");
  })
  .catch((err) => {
    console.log(err);
  });