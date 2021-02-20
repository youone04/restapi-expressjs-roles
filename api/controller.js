'use strict';

const resopnse = require('./response');
const connection = require('../config/database');

exports.index = (req , res) => {
        resopnse.ok('App rest api running', res);
}

exports.mahasiswa = (req , res) => {
        connection.query('select * from mahasiswa' ,(err , result , fields) => {
                if(err) throw err;
                resopnse.ok(result , res)
        });
}

exports.tampil = (req , res) => {
        connection.query(`select mahasiswa.id_mahasiswa , mahasiswa.nim , mahasiswa.nama , mahasiswa.jurusan ,matakuliah.matakuliah , matakuliah.sks from krs JOIN mahasiswa JOIN matakuliah WHERE krs.id_matakuliah = matakuliah.id_matakuliah AND krs.id_mahasiswa = mahasiswa.id_mahasiswa` ,[] ,(err , result ,fields) => {
                if(err) throw err;
                resopnse.nested(result , res);
        });
}
