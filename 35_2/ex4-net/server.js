const net = require('net');

const server = net.createServer((socket) => {
  socket.write('Olá, client\n');

  socket.on('data', (message) => console.log(message.toString()))
})

const PORT = 8085;

server.listen(PORT);

console.log(`Server TCP ativo!\nEscutando na porta ${PORT}`);
