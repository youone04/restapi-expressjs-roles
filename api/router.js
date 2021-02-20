'use strict';

module.exports = (app) => {
    var json = require('./controller');

    app.route('/')
    .get(json.index);

    app.route('/mahasiswa')
    .get(json.mahasiswa);

    app.route('/tampil')
    .get(json.tampil)
}