const express = require('express');
const app = express();
const crypto = require('crypto');
const simpsons = require('./simpsons');

app.use(express.json());

const generateToken = () => {
  return crypto.randomBytes(8).toString('hex');
}

const isEmailRight = (email = '') => {
  const regex = /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
};

const isPasswordRight = (password = '') => {
  const regex = /^\d+$/g;
  return password.match(regex) && password.length >= 6;
};

const isFirstNameRight = (firstName = '') => {
  const regex = /^[a-zA-Z]*$/;
  return firstName.length > 3 && regex.test(firstName);
};

const isPhoneRight = (phone = '') => {
  const regex = /\+\d{2}\s\(\d{2}\)\s\d{4,5}-?\d{4}/g;
  return regex.test(phone);
};

const isTokenRight = (token = '') => {
  const regex = /^([a-zA-Z0-9 _-]+)$/;
  return token.length === 16 && regex.test(token);
};

const isUserRight = ({ email, password, firstName, phone }) => {
  if (!isEmailRight(email)) return false;
  if (!isPasswordRight(password)) return false;
  if (!isFirstNameRight(firstName)) return false;
  if (!isPhoneRight(phone)) return false;
  return true;
}

const signup = ((req, res) => {
  if (!isUserRight(req.body)) return res.status(400).json({ message: 'Campos inválidos' });
  const token = generateToken();
  res.status(200).json({ token });
})

app.get('/', ((req, res) => res.send('Hello world')));

app.post('/signup', signup);

const simpsonsRouter = express.Router();

simpsonsRouter.get('/', (_req, res) => res.status(200).json(
  {
    "endpoints": [
      "/simpsons/list",
      "/simpsons/people/:id"
    ]
  })
);

simpsonsRouter.get('/list', (_req, res) => res.status(200).json(
  { "characters": simpsons.characters.slice(0, 5) }
));

simpsonsRouter.get('/people/:id', (req, res) => {
  const simpsonCharacter = simpsons.characters.find(({ id }) => req.params.id === id);
  if (!simpsonCharacter) return error404(req, res);
  res.status(200).json({ "character": simpsonCharacter })
});

app.use('/simpsons', simpsonsRouter);

const error500 = (err, _req, res) => {
  console.error(err.stack);
  res.status(500).send({ message: 'Erro 500 - Deu ruim no servidor' });
}

const error404 = (_req, res) => {
  res.status(404).send({ message: 'Erro 404 - Página não encontrada' });
}

app.use(error404);
app.use(error500);

app.listen(3000, () => console.log('App de Exemplo escutando na porta 3000!'));
