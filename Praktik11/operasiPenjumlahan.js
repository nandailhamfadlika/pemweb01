function operasiJumlah(){
    // dapatkan nilai inputan user

    let bilangan1 = document.getElementById("bilangan1").value
    let bilangan2 = document.getElementById("bilangan2").value

    // dapatkan elemen untuk menampilkan hasil

    let jumlah = document.querySelector("#hasilPenjumlahan")
    
    hasilPenjumlahan = parseInt(bilangan1) + parseInt(bilangan2)

    console.log(hasilPenjumlahan);

    jumlah.innerHTML = hasilPenjumlahan
}