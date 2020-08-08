const axios = require('axios');

axios
  .get('http://localhost:3000/ping/')
  .then(response => console.log(response.data + response.status))
  .catch(error => console.log(error))
