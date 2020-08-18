const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (_req, res) => res.sendFile(__dirname + '/index.html'));

const clients = {};

io.on('connection', socket => {
  socket.on("join", (name) => {
    clients[socket.id] = name;
    socket.emit("update", "You have connected to the server.");
    socket.broadcast.emit('update', `${clients[socket.id]} has joined the server.`);
  });

  socket.on('mensagem', (msg) => {
    socket.broadcast.emit('mensagemServer', `${clients[socket.id]} - ${msg}`);
  });

  socket.on('disconnect', () => {
    io.emit('adeus', { mensagem: 'Poxa, fica mais, vai ter bolo :)' });
  });
});

http.listen(3000, () => console.log('Escutando na porta 3000'));
