var jmlAngkot = 10
var AngkotBeroperasi = 6
var noAngkot = 1

while(noAngkot <= AngkotBeroperasi) {
    console.log('Angkot No. ' + noAngkot + ' Beroperasi dengan baik.')

noAngkot++    
}

for( noAngkot = AngkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++ ) {
    console.log('Angkot No. ' + noAngkot + ' Sedang tidak beroperasi.')
}