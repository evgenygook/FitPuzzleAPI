const User = require("../models/User");

exports.registerUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();

    res.status(201).json(registred);
  } catch (error) {
    res.status(500).json({ message: "something wrong with register" });
  }
};

//А КАК/??

// // //ToDo:
// auth
// register
