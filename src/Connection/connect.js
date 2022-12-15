const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect("mongodb+srv://root:sudhakar@cluster0.d1zvyde.mongodb.net/?retryWrites=true&w=majority",
{ useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log("Login successful");
  })
  .catch((err) => {
    console.log(err);
  });