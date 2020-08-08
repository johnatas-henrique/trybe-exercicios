const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const fs = require('fs').promise;

const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/uploads'));

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => {
    callback(null, 'uploads/');
  },
  filename: (_req, file, callback) => {
    callback(null, file.originalname)
  }
});

const upload = multer({ storage });

app.get('/files/read/:fileparam', async(req, res) => {
  const {fileparam} = req.params;
  const result = await fs.readFile(`uploads/${fileparam}`, 'ascii');
  res.status(200).send(result);
})

app.get('/ping', (_req, res) => res.send('pong!'));

app.post('/files/upload', upload.single('file'), (req, res) => res.send().status(200));

const PORT = 3000;
app.listen(PORT, () => console.log(`Logado na porta ${PORT}`))


