const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

io.on('connection', socket => {
  socket.broadcast.emit('mensagemServer');
  console.log('Usuário conectado');
  socket.on('disconnect', () => {
    io.emit('adeus', { mensagem: 'Poxa, fica mais, vai ter bolo :)' });
    console.log('Usuário desconectado');
  });
  socket.on('mensagem', (msg) => {
    io.emit('mensagemServer', msg);
  });
});

http.listen(3000, () => console.log('Escutando na porta 3000'));
