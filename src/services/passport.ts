import * as passport from 'passport';
import * as mongoose from 'mongoose';
import {
  Strategy as GoogleStrategy,
  StrategyOptions,
  VerifyFunction,
} from 'passport-google-oauth20';
import { keys } from '../config/keys';

const User = mongoose.model('users');

passport.serializeUser((user: any, done) => {
  console.log('serialize', user);
  done(null, user.id);
});

passport.deserializeUser((id: string, done) => {
  User.findById(id).then((user: any) => {
    console.log('deserialize', user);
    done(null, user);
  });
});

const options: StrategyOptions = {
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: keys.googleCallbackURL,
};

const verify: VerifyFunction = async (
  accessToken: string,
  refreshToken: string,
  profile: any,
  done: any,
) => {
  console.log('token:', accessToken);
  console.log('refresh token:', refreshToken);
  console.log('profile:', profile);

  const existingUser = await User.findOne({ googleId: profile.id });

  if (existingUser) {
    return done(null, existingUser);
  }
  const user = await new User({ googleId: profile.id }).save();

  done(null, user);
};

passport.use(new GoogleStrategy(options, verify));
