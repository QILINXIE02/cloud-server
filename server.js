const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Qilin was here!');
});

app.listen(port, () => {
  console.log(`Qilin's app listening at http://localhost:${port}`);
});
