const jwt = require("jsonwebtoken");
const config = require("../config");

async function createAccessToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, config.secret, { expiresIn: "1d" }, (err, token) => {
      if (err) reject(err);
      resolve(token);
    });
  });
}
module.exports = { createAccessToken };
