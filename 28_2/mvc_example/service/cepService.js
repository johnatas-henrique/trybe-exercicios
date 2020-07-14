const cepModel = require('../model/cepModel');

const getCEP = async (cep) => {
  const db = await cepModel.getCEPFromDB(cep);

  if (db) return db;

  const api = await cepModel.getCEPFromAPI(cep);

  if (!api) return { error: true, message: 'CEP não encontrado' };

  await cepModel.insertCEP(api);
  return api;
}

module.exports = { getCEP }
