const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const morgan = require('morgan');

app.use(morgan('dev'));
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'okay' });
});

app.get('/', (req, res) => {
  res.send('Jai mata Shaliii');
});

console.log(require.main === module,"require.main === module");
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

module.exports = app;
