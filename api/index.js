const express = require('express');
const { PORT, PASSWORD } = require('./constants/constants.js');
const Vigenere = require('caesar-salad').Vigenere;

const app = express();
app.get('/', (req, res) => {
  res.send(`<p classname = "text">Backend api</p>`);
});

app.get('/:text', (req, res) => {
  const text = req.params.text;
  res.send(`<p classname = "text">${text}</p>`);
});

app.get('/encode/:data', (req, res) => {
  const data = req.params.data;
  const encodedData = Vigenere.Cipher(PASSWORD).crypt(data);
  res.send(`<p classname = "text">${encodedData}</p>`);
});

app.get('/decode/:data', (req, res) => {
  const data = req.params.data;
  const decodedData = Vigenere.Decipher(PASSWORD).crypt(data);
  res.send(`<p classname = "text">${decodedData}</p>`);
});

app.use((req, res) => {
  res.status(404).send('<p classname = "text">404</p>');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
