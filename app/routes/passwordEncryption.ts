import crypto from "crypto";
// import passwordCoplexity from 'joi-password-complexity';
const PWD_CONFIG = require("../config/pwd.config");

exports.calculatesHmacAndSalt = (password: any) => {
  const salt = crypto.randomBytes(16).toString("hex");
  const hmac = crypto.createHmac("sha256", password).update(salt).digest("hex");

  return {
    hmac,
    salt,
  };
};

exports.validatePassword = (password: any, passwordHash: any, salt: any) => {
  const hmac = crypto.createHmac("sha256", password).update(salt).digest("hex");
  if (passwordHash == hmac) {
    return true;
  } else {
    return false;
  }
};
