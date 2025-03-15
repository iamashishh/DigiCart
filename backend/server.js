const app = require('./app');
const config  = require("./src/config/env.config")
const database = require("./src/db/db");
const port = 3000;

database();


app.listen(config.PORT, () => {
    console.log(`Server is running on http://localhost:${config.PORT}`);
});