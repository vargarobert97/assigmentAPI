require("dotenv/config");
const express = require("express");

const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//Import routes
const postsRoute = require("./routes/routes");
app.use("/routes", postsRoute);

//Connection to DataBase
// mongoose
//  .connect(process.env.DataBase_CONNECTION, {
//  useNewUrlParser: true,
//  useUnifiedTopology: true,
//  })
//  .then((result) => {
//   (app.listen(5000), () => {
//     () => console.log("Conneted to DB");
//   });
//  });

mongoose.connect(
  process.env.DataBase_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Conneted to DB")
);

app.listen(5500);
