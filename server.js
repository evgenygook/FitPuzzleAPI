const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");
const {
  getAllPlants,
  createPlant,
  deletePlant,
  getPlantById,
  updatePlantById,
} = require("./controllers/plantController");
const { getUserById } = require("./controllers/authController");
const { getAllUsers } = require("./controllers/usertController");

app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("Hello PEPE");
});

app.get("/user", (req, res) => {
  res.send("Hello user");
});
//=====Plants====
app.get("/plants", getAllPlants);
app.post("/plants", createPlant);
app.delete("/plants/:id", deletePlant);
app.get("/plants/:id", getPlantById);
app.patch("/plants/:id", updatePlantById);
//====User====
//==auth==
app.post("/user/register", registerUser);
app.get("/user/:id", getUserById);
app.get("/user", getAllUsers);

//====port====
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

mongoose
  .connect(
    "mongodb+srv://evgenygook_admin:tM5f43Lb!@fitpuzzleapi.jjr4elk.mongodb.net/fitpuzzle-api?appName=FitPuzzleAPI",
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
