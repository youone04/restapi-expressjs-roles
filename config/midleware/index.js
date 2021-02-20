var express = require('express');
var auth = require('./auth');
const verifikasi = require("./verifikasi");
var router = express.Router();

router.post('/api/v1/register',auth.registrasi);
router.post('/api/v1/login',auth.login);

// url need auth
router.get('/api/v1/secret' , verifikasi() ,auth.pagesecret);
router.get('/api/v1/tampil2/', verifikasi() , auth.tampil2);
module.exports = router;