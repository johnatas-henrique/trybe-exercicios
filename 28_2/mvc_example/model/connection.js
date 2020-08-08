const xdevapi = require('@mysql/xdevapi');

const connection = () => xdevapi.getSession({
    user: 'root',
    password: process.env.SENHA,
    host: 'localhost',
    port: 33060,
    schema: 'cep_mvc'
  }).then(session => session)

module.exports = connection;
