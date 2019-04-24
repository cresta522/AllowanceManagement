'use strict';

import auth from './routes/auth';
import user from './routes/user';

const express = require('express');
const app = express();
const http = require('http');
const server = http.Server(app);

const PORT = process.env.PORT || 5000;

// public dir
app.use(express.static('public'));
// app.use(express.static(__dirname + 'public'));

app.use('/auth', auth);
app.use('/user', user);

server.listen(PORT, () => {
  console.log('Listen on port 5000.');
});

export default app;