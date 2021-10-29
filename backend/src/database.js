const mongoose = require("mongoose");

const URI = process.env.CONEXION_DB;

mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true
})

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("DB is Connected");
})
