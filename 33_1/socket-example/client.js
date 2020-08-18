const net = require('net');

const client = net.connect({port: 8080}, () => {
  console.log('Cliente conectado ao servidor!');
  client.write('Cliente 001 - Mensagem: top');
});

client.on('data', (data) => {
  console.log(data.toString());
  client.end();
});

client.on('end', () => console.log('Desconectado do servidor'));
