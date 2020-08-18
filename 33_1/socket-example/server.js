const net = require('net');

const connections = [];

const server = net.createServer((connection) => {
  connections.push(connections);
  server.getConnections((err, count) => {
    console.log(`Novo cliente conectado, atualmente temos ${count} clientes`)
  });

  connection.on('end', () => console.log('Cliente desconectado'));
  connection.on('data', (data) => console.log(`O cliente disse: ${data}`));

  // connection.write('Mensagem do servidor!\r\n');
  // connection.pipe(connection);

});

server.listen(8080, () => console.log('Escutando na porta 8080'));
