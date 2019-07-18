// Estableciendo la conexión con el servidor
var socket = io();

// Interactuando con el servidor
socket.on("connect", function (){
    console.log("conectado al servidor");
});

socket.on("disconnect", function(){
    console.log("Perdimos la conexión al servidor");
});

// El método envía el mensaje SOLO al servidor.
socket.emit("enviarMensaje", {
    user: "Gustavo Jorge",
    message: "Hola mundo"
}, function (resp){
    console.log("Respuesta del Servidor ", resp);
});

socket.on("enviarMensaje", function(message){
    console.log("Servidor: ", message);
});