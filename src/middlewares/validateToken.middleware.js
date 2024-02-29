const jwt = require("jsonwebtoken");
const config = require("../config");

exports.validateToken = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) return res.status(401).json({ message: "Acceso denegado" });

  jwt.verify(token, config.secret, (err, user) => {
    if (err) return res.status(403).json({ message: "Token no válido" });

    req.user = user;
  });

  next();
};
