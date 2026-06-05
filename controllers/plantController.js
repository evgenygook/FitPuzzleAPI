const Plant = require("../models/Plant");

exports.getAllPlants = async (req, res) => {
  try {
    const plants = await Plant.find();
    res.status(200).json(plants);
  } catch (error) {
    res.status(500).json({ message: "Not today :(" });
  }
};

exports.createPlant = async (req, res) => {
  try {
    const newPlant = new Plant(req.body);
    await newPlant.save();
    res.status(201).json(newPlant);
  } catch (error) {
    console.log("somthing wrong in createPlant");
  }
};

exports.deletePlant = async (req, res) => {
  try {
    const deletedPlant = await Plant.findByIdAndDelete(req.params.id);
    if (!deletedPlant) {
      res.status(404).json({ message: "Not found plant" });
    }

    res.status(200).json({ message: " deleted" });
  } catch (error) {
    console.log("somthing wrong in deletePlant");
  }
};

exports.getPlantById = async (req, res) => {
  try {
    const getPlantById = await Plant.findById(req.params.id);
    if (!getPlantById) {
      res.status(404).json({ message: "not found by id" });
    }
    res.status(200).json(getPlantById);
  } catch (error) {
    console.log("somthing wrong in getPlantById");
  }
};

exports.updatePlantById = async (req, res) => {
  try {
    const plantId = req.params.id;
    const updatePlant = await Plant.findByIdAndUpdate(plantId, req.body, {
      returnDocument: "after",
    });
    if (!updatePlant) {
      return res.status(404).json({ message: "растение не найдено" });
    }
    res.status(200).json(updatePlant);
  } catch (error) {
    console.log("somthing wrong in updatePlantById");
  }
};
