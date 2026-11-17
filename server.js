const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Security test lab server running normally' });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Test lab listening on port ${PORT}`);
  });
}

module.exports = app;
