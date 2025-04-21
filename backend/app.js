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
const cartRoutes = require("./src/routes/cart.routes");
const orderRoutes = require("./src/routes/order.routes");

//Routes
app.use("/api/auth", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart",cartRoutes);
app.use("/api/orders", orderRoutes);



module.exports = app;   