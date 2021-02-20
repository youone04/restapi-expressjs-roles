const jwt = require('jsonwebtoken');
const config = require('../../config/secret');

const verifikasi = () => {
        return (req , res, next) => {
            var roles = req.body.role;
            // cek authorizzation header
            var tokenWithBearer = req.headers.authorization;
            if(tokenWithBearer){
                var token = tokenWithBearer.split(' ')[1];
                // verifikasi
                jwt.verify(token ,config.secret , (err ,decoded) => {
                    if(err) {
                        return res.status(401).send({
                            auth: false,
                            message: 'token tidak terdaftar!'
                        });
                    }else{
                        if(roles == 2){
                            req.auth = decoded;
                            next()
                        }else{
                            return res.status(401).send({
                                auth: false,
                                message: 'roles failed access at page!'
                            });
                        }
                    }

                });
            }else{
                return res.status(401).send({
                    auth: false,
                    message: 'token bad!'
                });
            }
        }
}
module.exports = verifikasi;