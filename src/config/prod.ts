// prod.ts -- don't commit!
module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  googleCallbackURL: process.env.GOOGLE_CALLBACK_URL,
  mongoUri: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
};
