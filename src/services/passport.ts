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

const verify: VerifyFunction = (
  accessToken: string,
  refreshToken: string,
  profile: any,
  done: any,
) => {
  console.log('token:', accessToken);
  console.log('refresh token:', refreshToken);
  console.log('profile:', profile);

  User.findOne({ googleId: profile.id })
    .then((existingUser) => {
      if (existingUser) {
        done(null, existingUser);
      } else {
        new User({ googleId: profile.id })
          .save()
          .then(user => done(null, user));
      }
    })
    .catch(error => console.log(error));
};

passport.use(new GoogleStrategy(options, verify));
