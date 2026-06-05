const User = require("../models/User");

exports.getUserById = async (req, res) => {
  try {
    const getUserById = await User.findById(req.params.id);
    if (!getUserById) {
      res.status(404).json({ message: "not found user by id" });
    }
    res.status(200).json(getPlantById);
  } catch (error) {
    console.log("somthing wrong in getUserById");
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json({ message: "something wrong with all users getter" });
  }
};

// //ToDo:
// CRUD для пользователя(владельца)
// валидатор с zod
