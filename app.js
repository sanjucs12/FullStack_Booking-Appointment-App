const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sequelize = require("./database");

const controller = require("./controller");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get("/users", controller.getUsers);
app.post("/users/add-user", controller.addUser);
app.delete("/users/delete-user/:id", controller.deleteUser);
app.delete("/users/edit-user/:id", controller.editUser);

sequelize
  .sync()
  .then((result) => {
    // console.log(result);
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
