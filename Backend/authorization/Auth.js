
const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;

const authJwt = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    req.user = user; 
    next(); 
  });
};

module.exports = authJwt;
