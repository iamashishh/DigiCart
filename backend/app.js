const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// const userRoutes = require("./src/routes/user.routes")
// app.use("/api/users", userRoutes);

module.exports = app;   