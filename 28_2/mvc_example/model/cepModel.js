const axios = require('axios');
const connection = require('./connection');

const getCEPFromDB = async (cep) =>
  connection()
    .then(db => db
      .sql(
        `SELECT cep, uf, cidade, bairro, logradouro
        FROM cep
        WHERE cep = ?`
      )
      .bind(cep)
      .execute()
    )
    .then(results => results.fetchAll()[0] || [])
    .then(([cep, uf, cidade, bairro, logradouro]) =>
      ({ cep, uf, cidade, bairro, logradouro }))
    .then(result => !result.cep ? null : result)

const getCEPFromAPI = async (cep) =>
  axios.get(`http://cep.la/${cep}`, { headers: { accept: 'application/json' } })
    .then(result => !result.data.cep ? null : result.data);

const insertCEP = async ({ cep, uf, cidade, bairro, logradouro }) =>
  connection()
    .then(db => db
      .sql(
        'INSERT INTO cep (cep, uf, cidade, bairro, logradouro) VALUES (?, ?, ?, ?, ?);'
      )
      .bind(cep)
      .bind(uf)
      .bind(cidade)
      .bind(bairro)
      .bind(logradouro)
      .execute()
    )

module.exports = {
  getCEPFromDB,
  getCEPFromAPI,
  insertCEP
};
