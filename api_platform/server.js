// Get .env data
require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const expressEjslayouts = require("express-ejs-layouts");
const path = require("path");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//app.use(bodyParser.json());
const DbConnect = async () => {
  try {
    await mongoose.connect(process.env.MongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Connected");
  } catch (err) {
    console.log(err.message);

    // Exit Process with Failure
    process.exit(1);
  }
};

//Connect Database
DbConnect();

app.use(expressEjslayouts);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Server Routes
app.use("/", require("./routes/sensor"));

app.get("/", (req, res) => {
  return res.render("index");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
