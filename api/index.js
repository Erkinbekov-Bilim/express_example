import { PORT } from './constants/constants.js';
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  const text = req.params.text;
  res.send(`<p classname = "text">Backend api</p>`);
});

app.get('/:text', (req, res) => {
  const text = req.params.text;
  res.send(`<p classname = "text">${text}</p>`);
});

app.use((req, res) => {
  res.status(404).send('<p classname = "text">404</p>');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
