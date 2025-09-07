const express = require('express');
const cors = require('cors');
require('dotenv').config();
const excuseRoutes = require('./routes/excuseRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api/excuses', excuseRoutes);

app.listen(PORT, () => {
  console.log(`Serveur: http://localhost:${PORT}`);
});