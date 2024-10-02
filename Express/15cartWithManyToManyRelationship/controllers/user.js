const express = require("express");
const User = require("../models/user");

exports.getUsers = async (req, res, next) => {
  const users = await User.findAll();
  res.json(users);
};

exports.getUser = async (req, res, next) => {
  const user = await User.findByPk(req.params.id);
  res.json(user);
};

exports.postUser = async (req, res, next) => {
  const username = req.body.username;
  const email = req.body.email;
  const phone = req.body.phone;

  const data = await User.create({
    username: username,
    email: email,
    phone: phone,
  });
  res.status(201).json({ newUserDetail: data });
};

// DELETE a user by ID
exports.deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id; // Get the user ID from the request params
    const user = await User.findByPk(id); // Find the user in the database

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await user.destroy(); // Delete the user
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.editUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status.json({ message: "user not found" });
    }
    user.username = user.username;
    user.email = user.email;
    user.phone = user.phone;
    user.destroy();
    console.log(user);
    await user.save(); // Save the updated user
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
};
