const express = require('express');
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

//Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:5173", // ✅ React App Allowed
    methods: "GET,POST,PUT,DELETE", // ✅ Allowed Methods
    credentials: true // ✅ Allow Cookies
  }));

//Import Routes
const userRoutes = require("./src/routes/auth.routes");
const productRoutes = require("./src/routes/product.routes");

//Routes
app.use("/api/auth", userRoutes);
app.use("/api/product", productRoutes);



module.exports = app;   