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
    // console.log(values)
    const hasil = values.reduce((akumulasikan , item) => {
        // console.log(akumulasikan)
           //akumulasi hasil dari aksi => awal nya objek kosong lalu di else di disi manjadi item degan key nya sebagai nama karena  akumulasikan[item.nama]

            //item/curent = yang sedang di luping

        // keynya
        // contoh yudi gunawan jd key karenam item.nama dalam akumulasikan[item.nama
        // "hasil": {
        //     "yudi gunawan": {
        //         "id_mahasiswa": 5,
        //         "nim": "14117035",
        //         "nama": "yudi gunawan",
        //         "jurusan": "Teknik informatika",
        //         "matakuliah": [
        //             "pemrograman web",
        //             "Matriks dan ruang vektor"
        //         ],
        //         "sks": 3
        //     },
        
        // console.log(akumulasikan[item.nama])
        if(akumulasikan[item.nama]){//jka undifined maka masuk else, jika data ada contoh yudi gunawan, maka semua data yudi gunawan masuk sini dan selesaikan dulu, lalu name selanjutnya
            // jika ada masuk sini

            // akumulasikan[item.nama]  => akses objek bersarkan namanya
            const group = akumulasikan[item.nama];//mejnadi key dr arrray baru
            // console.log('group =>',akumulasikan)

            // console.log(item.matakuliah)

            if(Array.isArray(group.matakuliah)){//true and  false, apakah group matakuliah itu array
                group.matakuliah.push(item.matakuliah);//jika array maka push sesuai nama
            }else{
                // jika bukan array ubah kedalam array
                // console.log('group =>',group)
                // console.log('item =>',item)
                //  console.log('group =>' ,group.matakuliah)
                // console.log('item =>',item.matakuliah)
                
                // masuk block ini cuma sekali setiap user yang ada di database
                // console.log(item.matakuliah)
               
                group.matakuliah = [group.matakuliah , item.matakuliah];
                // console.log(group.matakuliah)
                
            }
        }else{
            // jika undefined masuk blok ini dan akumulasikan[item.nama]  disi array item
            // akumulasikan[item.nama] => key dalam objek adalah sebuah nama
            // console.log(item)
            akumulasikan[item.nama] = item;
        }
        return akumulasikan;
    },{});
    var data = {
        'status' : 200,
        'values' : hasil,
        //  'awal': values
    };
    res.json(data);
    res.end();
}

// akumulasikan awalnya undefined
// item isi array dr select database
// group.matakuliah Mengambil nama matakuliah
