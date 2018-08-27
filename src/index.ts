import * as express from 'express';
import * as mongoose from 'mongoose';
import * as cookieSession from 'cookie-session';
import * as passport from 'passport';
import { authRoutes } from './routes/authRoutes';

import './models/User';
import './services/passport';
import { keys } from './config/keys';

const BASE_URL = 'http://localhost:5000/';
const PORT = process.env.PORT || 5000;

mongoose.connect(keys.mongoUri);

const app = express();

app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  secret: keys.cookieKey,
}));

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);

app.listen(PORT, (err: any) => {
  if (err) {
    return console.log('error', err);
  }
  return console.log(`server is listening on ${PORT}`);
});
