const { WebSocketServer } = require('ws');
const server = new WebSocketServer({port: 5555});

server.on('connection', socket => {
    socket.on('message', message => {
        console.log(`this is the message ${message}`)
        socket.send(`Roger that! ${message}`)
    });

});