const express = require('express');
const bodyParser = require('body-parser');
const productController = require('./controllers/productController');

const app = express();
app.use(express.json());

app.use(bodyParser.json());

app.use('/products', productController);

const TCP_PORT = 3000;

app.listen(TCP_PORT, () => {
  console.log(`App escutando na porta ${TCP_PORT}`);
});
