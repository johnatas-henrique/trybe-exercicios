const cepService = require('../service/cepService');

const postCEP = async (req, res) => {
  const { cep } = req.body;
  const cepReplace = cep.replace('-', '');

  try {
    const result = await cepService.getCEP(cepReplace);
    if (result.error) return res.status(404).json({ error: true, message: 'CEP não encontrado' })
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({ error: true, message: e.message })
  }
}

module.exports = {
  postCEP
}
