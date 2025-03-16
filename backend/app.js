const express = require('express');

const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Import Routes
const userRoutes = require("./src/routes/auth.routes")

//Routes
app.use("/api", userRoutes);



module.exports = app;   