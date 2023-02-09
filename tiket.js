
    function konfirmasi(){
        
        var datadiri = confirm("datanya udah bener ??");
            if (datadiri) {

                var nama = document.getElementById('input_nama').value;
                var berangkat = document.getElementById('input_berangkat').value;
                var tujuan = document.getElementById('input_tujuan').value;

                alert('HAI !! ' + nama +" Pesanan Tiket Kamu dari "+berangkat+" ke "+ tujuan);
                
            } 
    }

    // refrensi 
        var tanggallengkap = new String();
        var namahari = ("Minggu Senin Selasa Rabu Kamis Jumat Sabtu");
        namahari = namahari.split(" ");
        var namabulan = ("Januari Februari Maret April Mei Juni Juli Agustus September Oktober November Desember");
        namabulan = namabulan.split(" ");

        var tgl = new Date();
        var hari = tgl.getDay();
        var tanggal = tgl.getDate();
        var bulan = tgl.getMonth();
        var tahun = tgl.getFullYear();
        hariini = namahari[hari] + ", " +tanggal + " " + namabulan[bulan] + " " + tahun;


    // 1 detik = 1000
    window.setTimeout("waktu()",1000);  
    function waktu() {   
        var tanggal = new Date();  
        setTimeout("waktu()",1000);  
        document.getElementById("jam").innerHTML = tanggal.getHours()+":"+tanggal.getMinutes()+":"+tanggal.getSeconds();
    }



