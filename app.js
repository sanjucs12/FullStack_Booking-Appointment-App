const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sequelize = require("./BACKEND/utils/database");
const usersRoutes = require("./BACKEND/routes/users-routes");

const app = express();

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use(usersRoutes);

sequelize
  .sync()
  .then((result) => {
    // console.log(result);
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
