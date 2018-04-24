import app from './App';

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err: any) => {
  if (err) {
    return console.log(err);
  }

  return console.log(`server is listening on ${PORT}`);
});

app.get('/', (req, res) => {
  res.send({
    hey: 'there',
  });
});
