const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

//set up a PORT
const PORT = process.env.PORT || 8000;

//Create express app instance
const app = express();

//body parser
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//make public folder accessible to client
app.use(express.static("public"));

//connect to mongo document
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/SMKR", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

//routes
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
