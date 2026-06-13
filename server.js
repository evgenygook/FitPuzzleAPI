const express = require("express");
const app = express();
const PORT = 3000;
require("dotenv").config();
const mongoose = require("mongoose");
const {
  getAllPlants,
  createPlant,
  deletePlant,
  getPlantById,
  updatePlantById,
} = require("./controllers/plantController");
const { registerUser, loginUser } = require("./controllers/authController");
const { getAllUsers, getUserById } = require("./controllers/userController");

app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("Welcome to the Plant API");
});

//=====Plants====
app.get("/plants", getAllPlants);
app.post("/plants", createPlant);
app.delete("/plants/:id", deletePlant);
app.get("/plants/:id", getPlantById);
app.patch("/plants/:id", updatePlantById);
//====User====
app.post("/user/register", registerUser);
app.post("/user/login", loginUser);
app.get("/user/:id", getUserById);
app.get("/user", getAllUsers);

//====port====
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

mongoose
  .connect(process.env.MONGODB_LINK)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
