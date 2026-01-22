const express = require('express');
const routes = require('./Config/routes');
const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Debug middleware to log incoming requests
app.use((req, res, next) => {
  console.log('Incoming request:', req.method, req.url, req.path);
  next();
});

// mount all routes
routes(app);

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

// health check
app.get('/health', (_req, res) => res.send('ok'));

module.exports = app; // export for Vercel
