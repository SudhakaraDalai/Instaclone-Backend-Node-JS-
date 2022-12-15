const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true ,useFindAndModify:false})
  .then(() => {
    console.log("Login successful");
  })
  .catch((err) => {
    console.log(err);
  });