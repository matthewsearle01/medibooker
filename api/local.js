const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') }); // load first

const express = require('express');
const app = require('./server');

const buildDir = path.join(__dirname, '..', 'client', 'build');
app.use(express.static(buildDir));
app.get('/{*splat}', (_req, res) => res.sendFile(path.join(buildDir, 'index.html')));

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server listening on ${port}`));
