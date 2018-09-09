//1.
cetakSimbol('*', 5); // bisa dibawah bisa diatas
function cetakSimbol(simbol, jumlah) {
    for (var i = 0; i < jumlah; i++) {
        console.log(simbol)
    }
}
//2
for (var baris = 1 ; baris < 5 ; baris++) {
    var stars = ''
    for ( var kolom = 1 ; kolom <= baris ; kolom++) {
        stars += '*'
    }
}
console.log(stars) //Revisi baru

//3
var rows3 = 6;
for (var i = 0; i < rows3; i++) {
    var string = "";
    for (let j = 0; j < i; j++) {
        string = string + "*"
    }
    console.log(string);
}