const express = require('express');
const app = express();
const cors = require('cors');
const config = require('../config')

require('./database');

app.use(cors());
app.use(express.json());

app.use('/api/', require('./routes/index'))

app.listen(config.PORT);
console.log('server on port',3000); ;