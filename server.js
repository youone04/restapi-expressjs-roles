const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var morgan = require('morgan');
const routes = require('./api/router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('dev'));

routes(app);
app.use('/auth' , require('./config/midleware'));

app.listen(3000 , () => {
    console.log('server connect');
})

// 15 => 14:38