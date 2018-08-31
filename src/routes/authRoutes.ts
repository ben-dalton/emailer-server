import * as passport from 'passport';
import { keys } from '../config/keys';

export const authRoutes = (app) => {
  app.get('/', (req, res) => {
    res.json({
      hi: 'there',
    });
  });

  app.get('/login', (req, res) => {
    res.json({
      try: 'again',
    });
  });

  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    }),
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys');
    },
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    console.log('current user:', req.user);
    console.log('current session:', req.session);
    res.send(req.user);
  });
};
