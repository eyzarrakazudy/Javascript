var penumpang = ['Sandhika', undefined, 'Doddy']
var tambahPenumpang = function(namaPenumpang, penumpang) {

    if ( penumpang.length == 0 ) {

        penumpang.push(namaPenumpang)

        return penumpang
    } else {
        for( var i = 0; i < penumpang.length; i++ ) {
            if( penumpang [1] == undefined ) {

                penumpang[i] = namaPenumpang

                return penumpang
            }
            else if( i == penumpang.length - 1 ){
                penumpang.push(namaPenumpang)

                return penumpang
            }
            
        }
    }
}