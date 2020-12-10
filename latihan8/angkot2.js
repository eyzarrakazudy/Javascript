// var jmlAngkot = prompt('masukkan jumlah angkot:')
// var AngkotBeroperasi = prompt('angkot yang tidak beroperasi mulai ke:')
var jmlAngkot = 10
var AngkotBeroperasi = 6
var noAngkot = 1

// while(noAngkot <= jmlAngkot) {
//     // console.log('Hello World '+noAngkot +'x')
//     console.log('Angkot No. '+noAngkot +' beroperasi dengan baik.')
//     // console.log(`Angkot No. `+noAngkot +` beroperasi dengan baik.`)
//     // console.log(`Angkot No. ${noAngkot} beroperasi dengan baik.`)
//     // alert(`Angkot No. ${noAngkot} beroperasi dengan baik.`)
//     noAngkot++
//     // noAngkot = noAngkot+1
// }

for( noAngkot; noAngkot <= jmlAngkot;noAngkot++ ) {
    if( noAngkot <= AngkotBeroperasi )
        console.log(`Angkot No. ${noAngkot} beroperasi dengan baik`)
    else
        console.log(`Angkot No. ${noAngkot} sedang tidak beroperasi`)    
}