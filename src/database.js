const config = require('../config')
const  mongoose = require('mongoose');

mongoose.connect(config.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log('Database is connected'))
.catch(err => console.log(err));
