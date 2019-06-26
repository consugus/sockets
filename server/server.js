const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');

const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));



// io mantiene la comunicación con el backend
module.exports.io  = socketIO(server) ;
require("./js/socket(server)");


// hubo que cambiar la función desde app.listen(port, (err) -> {...}) a server.listen(port, (err) => {...)
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Escuchando peticiones en el puerto ${ port }`);

});

