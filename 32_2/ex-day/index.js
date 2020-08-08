const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('./controllers');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/books', controllers.book);

app.get('/test', (req, res) => res.status(200).json({ message: 'bootstrap OK' }));

app.use((err, req, res, next) => {
  res.status(500).json({ error: "Service unavailable" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Logged in ${PORT}`));
