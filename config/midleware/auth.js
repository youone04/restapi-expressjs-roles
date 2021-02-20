var connection = require('../database');
var mysql = require('mysql');
var md5 = require('md5');
var response = require('../../api/response');
var jwt = require('jsonwebtoken');
var ip = require('ip');
var config = require('../secret');
exports.registrasi = (req , res) => {
        var post = {
            username : req.body.username,
            email : req.body.email,
            password: md5(req.body.password),
            role: req.body.role,
            tgl_daftar: new Date()
        }

        var query = 'select email from ?? where ?? = ?';
        var table = ['user' ,'email',post.email];
        query = mysql.format(query,table);
        connection.query(query ,(err ,results) => {
            if(err){
                console.log(err);
            }else{
                if(results.length == 0){
                    var query = 'insert into ?? set ?';
                    var table = ['user'];
                    query= mysql.format(query , table);
                    connection.query(query , post , (err, rows ) => {
                        if(err) throw err;
                        response.ok('success add user' , res)
                    });

                }else{
                    response.ok('email duplicate' , res);
                }
                
            }
          
        })
}

exports.login = (req , res) => {
    var post = {
        password: req.body.password,
        email: req.body.email
    };

    var query = 'select * from ?? where ?? = ? and ?? = ?';
    var table = ['user' , 'password' ,md5(post.password) ,'email' , post.email];
    query = mysql.format(query , table);
    connection.query(query , (err , rows) => {
        if(err) throw err;
        if(rows.length == 1){
            var token = jwt.sign({rows} ,config.secret,{
                expiresIn: '24h'
            });
            id_user = rows[0].id_user;
            var data = {
                id_user: id_user,
                akses_token : token,
                ip_address: ip.address()
            }
            var query = 'insert into ?? set ?';
            var table =['akses_token'];
            query = mysql.format(query, table);
            connection.query(query ,data , (err , rows) => {
                if(err) throw err;
                res.json({
                    success: true,
                    token: token,
                    currUser: data.id_user
                    
                });
            })
        }else{
            res.json({
                'Error' : true,
                'message' : 'email or password in correct'
            });
        }
    });
}

exports.pagesecret = (req , res) => {
    response.ok('sucess access page role 2',res)
}

exports.tampil2 = (req , res) => {
    connection.query(`select mahasiswa.id_mahasiswa , mahasiswa.nim , mahasiswa.nama , mahasiswa.jurusan ,matakuliah.matakuliah , matakuliah.sks from krs JOIN mahasiswa JOIN matakuliah WHERE krs.id_matakuliah = matakuliah.id_matakuliah AND krs.id_mahasiswa = mahasiswa.id_mahasiswa` ,[] ,(err , result ,fields) => {
            if(err) throw err;
            response.nested(result , res);
    });
}
