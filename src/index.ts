// import app from './App';
import * as express from 'express';

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send({
    hey: 'there',
  });
});

app.listen(PORT, (err: any) => {
  if (err) {
    return console.log(err);
  }

  return console.log(`server is listening on ${PORT}`);
});
