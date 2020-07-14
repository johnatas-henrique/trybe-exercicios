require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const authMiddleware = require('./middleware/auth');
const cepController = require('./controller/cepController');
const userController = require('./controller/userController');

const app = express();

app.use(bodyParser.json());

app.post('/', authMiddleware, cepController.postCEP);
app.post('/users', userController.createUser);
app.post('/login', userController.loginUser);

const { PORT } = process.env;

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`))
