const express = require('express');
const cookieParser = require("cookie-parser");

const app = express();

//Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

//Import Routes
const userRoutes = require("./src/routes/auth.routes");
const productRoutes = require("./src/routes/product.routes");

//Routes
app.use("/api/auth", userRoutes);
app.use("/api/product", productRoutes);



module.exports = app;   