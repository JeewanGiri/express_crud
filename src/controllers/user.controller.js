const User = require("../models/user.model");

// CREATE
exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json({ message: "User created", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ ALL
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json({ users });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ SINGLE
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({ message: "User updated", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
