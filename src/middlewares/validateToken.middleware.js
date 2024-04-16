const jwt = require("jsonwebtoken");
const config = require("../config");

exports.validateToken = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) return res.status(401).json({ message: "Acceso denegado" });

  try {
    jwt.verify(token, config.secret, (err, user) => {
      if (err) return res.status(403).json({ message: "Token no válido" });

      req.user = user.id;
    });

    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid token" });
  }
};
