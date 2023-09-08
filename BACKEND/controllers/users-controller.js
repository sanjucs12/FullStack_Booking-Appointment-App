const User = require("../models/user");

exports.addUser = async (req, res, next) => {
  try {
    if (!req.body.phoneNumber || !req.body.name) {
      return res
        .status(400)
        .send({ message: "Name and Phone number are mandatory...!" });
    }
    console.log(req.body);
    const name = req.body.name;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;

    const data = await User.create({
      name: name,
      email: email,
      phoneNumber: phoneNumber,
    });

    res.status(201).send({ newUserDetails: data });
  } catch (err) {
    res.status(500).send({ error: err });
  }
};

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();
    console.log("data retrived");
    res.status(200).send(users);
  } catch (err) {
    console.log(err);
    res.status(500).send("something went wrong");
  }
};

exports.deleteUser = async (req, res, next) => {
  if (!req.params.id) {
    return res.status(400).send({ message: "Id not found" });
  }
  try {
    const userId = req.params.id;
    console.log(userId);
    await User.destroy({ where: { id: userId } });
    res.send({ message: "deleted sucessfully" });
  } catch (err) {
    console.log("something went wrong");
    res.status(404).json({
      error: err,
    });
  }
};

exports.editUser = async (req, res, next) => {
  if (!req.params.id) {
    return res.status(400).send({ message: "Id not found" });
  }
  try {
    const userId = req.params.id;
    console.log(userId);
    await User.destroy({ where: { id: userId } });
    res.send({ message: "Please edit en the fields" });
  } catch (err) {
    console.log("something went wrong");
    res.status(404).json({
      error: err,
    });
  }
};
