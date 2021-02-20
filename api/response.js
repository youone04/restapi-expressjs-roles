'use strict';

// fungsi
exports.ok = (values , res) => {
        var data = {
            'status' : 200,
            'values' : values
        }
        res.json(data);
        res.end();
}

exports.nested = (values , res) => {
    const hasil = values.reduce((akumulasikan , item) => {

        if(akumulasikan[item.nama]){//jka undifined maka masuk else, jika data ada contoh yudi gunawan, maka semua data yudi gunawan masuk sini dan selesaikan dulu, lalu name selanjutnya
            // jika ada masuk sini
            const group = akumulasikan[item.nama];//mejnadi key dr arrray baru
            // console.log('group =>',group)
            if(Array.isArray(group.matakuliah)){//true and  false, apakah group matakuliah itu array
                group.matakuliah.push(item.matakuliah);//jika array maka push sesuai nama
            }else{
                // jika bukan array ubah kedalam array
                // console.log('group =>',group)
                // console.log('item =>',item)
                //  console.log('group =>' ,group.matakuliah)
                // console.log('item =>',item.matakuliah)
               
                group.matakuliah = [group.matakuliah , item.matakuliah];
                // console.log(group.matakuliah)
                
            }
        }else{
            // jika undefined masuk blok ini dan akumulasikan[item.nama]  disi array item
            akumulasikan[item.nama] = item;
        }
        return akumulasikan;
    },{});
    var data = {
        'status' : 200,
        'values' : hasil
    };
    res.json(data);
    res.end();
}

// akumulasikan awalnya undefined
// item isi array dr select database
// group.matakuliah Mengambil nama matakuliah