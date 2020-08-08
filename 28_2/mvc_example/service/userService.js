const jwt = require('jsonwebtoken');
const userModel = require('../model/userModel');
const { JWT_SECRET } = process.env;

const createUser = async (email, name, password) => {
  if (await userModel.existsByEmail(email)) return { error: true, message: 'User already exists' };
  await userModel.insertUser(email, name, password);
  return { error: false };
}

const loginUser = async (email, password) => {
  const user = await userModel.getUserByEmail(email);
  const unAuth = { error: true, message: 'Unauthorized', code: 'unauthorized' };
  if (!user || user.password !== password) return unAuth;
  const { password: _, id, ...restUser } = user;
  const jwtConfig = {
    expiresIn: '10m',
    algorithm: 'HS256',
    subject: `${id}`,
  }
  return jwt.sign(restUser, JWT_SECRET, jwtConfig);
}

module.exports = {
  createUser,
  loginUser,
}
