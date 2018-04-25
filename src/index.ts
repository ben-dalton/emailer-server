import * as express from 'express';
import * as passport from 'passport';
import {
  Strategy as GoogleStrategy,
  StrategyOptions,
  VerifyFunction,
} from 'passport-google-oauth20';
import { app } from './App';
import { keys } from './config/keys';

const BASE_URL = 'http://localhost:5000/';

const PORT = process.env.PORT || 5000;

const options: StrategyOptions = {
  ...keys,
  callbackURL: '/auth/google/callback',
};

const verify: VerifyFunction = (
  accessToken: string,
  refreshToken: string,
  profile: any,
) => {
  console.log('token:', accessToken);
  console.log('refresh token:', refreshToken);
  console.log('profile:', profile);
};

passport.use(new GoogleStrategy(options, verify));

app.use(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  }),
);

app.use('/auth/google/callback', passport.authenticate('google'));

app.listen(PORT, (err: any) => {
  if (err) {
    return console.log(err);
  }
  return console.log(`server is listening on ${PORT}`);
});
