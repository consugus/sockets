const { io } = require("../server");

io.on("connection", (client) => {
    // console.log("Usuario conectado\n", client);
    console.log("Usuario conectado");

    client.emit("enviarMensaje", {
            User: "Admin",
            message: "Bienvenido al sitio"
    });


    client.on("disconnect", () => {
        console.log("usuario desconectado");
    });

    client.on("enviarMensaje",  (message, callback) => {
        // console.log(message);
        // callback();
        if (message.user) { // es user porque en le obj que estamos mandando desde el server le pusimos ¨user¨
            callback({
                resp: "todo salió genial!"
            });
        } else {
                callback({
                    resp: "Algo anduvo como el tuje :("
                });
        }
    });

});