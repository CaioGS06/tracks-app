require("./models/User");
require("./models/Track");

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const trackRoutes = require("./routes/trackRoutes");
const requireAuth = require("./middlewares/requireAuth");

const app = express();
app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const mongoURI = "mongodb+srv://CaioGS:OJAoZ7N83X3XCYpu@trackserver.4homnk4.mongodb.net/?retryWrites=true&w=majority&appName=TrackServer";

mongoose.connect(mongoURI);
mongoose.connection.on("connected", () => {
  console.log("Connected");
});
mongoose.connection.on("error", (error) => {
  console.error("Error", error);
});

app.get("/", requireAuth, (req, res) => {
  res.send(`Your e-mail: ${req.user.email}`);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});