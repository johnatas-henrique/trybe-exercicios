const userService = require('../service/userService');

const createUser = async (req, res) => {
  const { email, name, password } = req.body;
  const results = await userService.createUser(email, name, password);
  if (results.error) return res.status(409).json(results);
  res.status(201).end();
}

const loginUser = async (req, res) => {
  const {email, password} = req.body;
  const token = await userService.loginUser(email, password);
  if (token.error) return res.status(401).json(token);
  res.status(200).json({token});
}

module.exports = {
  createUser,
  loginUser,
}
