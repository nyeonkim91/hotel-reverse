import jwt from 'jsonwebtoken';
import express_jwt from 'express-jwt';
import crypto from 'crypto';

const secret = 'hotelreverse';
const algorithm = 'aes-256-ctr';

export default {
  createToken: (user) => {
    return jwt.sign(user, secret, { expiresIn: 60*60*5 });
  },
  jwtCheck: express_jwt({
    secret: secret
  }),

  encrypt: (text) => {
    let cipher = crypto.createCipher(algorithm,secret);
    let crypted = cipher.update(text,'utf8','hex');
    crypted += cipher.final('hex');
    return crypted;
  },

  decrypt: (text) => {
    let decipher = crypto.createDecipher(algorithm,secret);
    let dec = decipher.update(text,'hex','utf8');
    dec += decipher.final('utf8');
    return dec;
  }
}
