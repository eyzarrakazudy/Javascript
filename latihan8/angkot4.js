var lagi = true
var jmlAngkot = 10
var angkotBeroperasi = 6

while( lagi ) {
    for ( var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++ ) {
        if( noAngkot <= 6 ) {
            console.log(`Angkot No. ${noAngkot} Beroperasi dengan baik.`)
        } else {
            console.log (`Angkot No. ${noAngkot} sedang tidak beroperasi.`)
        }
    }
    lagi = confirm('coba lagi?')
}