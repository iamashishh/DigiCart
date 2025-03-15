const app = require('./app');
const http = require("http");
const config  = require("./src/config/env.config");


const server  = http.createServer(app);


server.listen(() => {
    console.log(`Server is running on http://localhost:${config.PORT}`);
});