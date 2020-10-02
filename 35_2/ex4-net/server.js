const net = require('net');

const server = net.createServer((socket) => {
  socket.write('Olá, client');

  socket.on('packets', (data) => console.log(data.toString()))
})

const PORT = 8085;

server.listen(PORT);

console.log(`Server TCP ativo!\nEscutando na porta ${PORT}`);
