const jwt = require('jsonwebtoken');
const userModel = require('../model/userModel');
const { JWT_SECRET } = process.env

const authLogin = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) res.status(401).json({ error: true, message: 'Token is missing' });
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    const user = await userModel.getUserById(payload.sub);
    req.user = user;
    return next();
  } catch (fail) {
    res.status(401).json({ error: true, message: fail.message });
  }
}

module.exports = authLogin;
