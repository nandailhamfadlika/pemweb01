function hitungRupiah() {

    let rupiah = document.getElementById("dollar").value

    dollar = 14650
    
    let hasilKonversi = dollar * rupiah

    console.log(hasilKonversi)

    let konversi = document.querySelector("#Konversi")

    konversi.innerHTML = hasilKonversi


    
}