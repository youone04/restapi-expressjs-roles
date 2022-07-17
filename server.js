const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var morgan = require('morgan');//berguna untuk memanage route api
var fs = require('fs');
const routes = require('./api/router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('dev'));
var fileUpload = require('express-fileupload');
app.use(fileUpload({
    useTempFiles: true
}));

app.use('/uploads', express.static('uploads'));


routes(app);
// middle ware harus login
app.use('/auth' , require('./config/midleware'));

app.listen(3000 , () => {
    console.log('server connect');
})

// 15 => 14:38