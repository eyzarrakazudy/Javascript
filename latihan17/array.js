// manipulasi array

// 1. menambah isi array
// var arr = []
// arr[0] = "sandhika"
// arr[1] = "galih"
// arr[2] = "nofa"
// arr[6] = "doddy"

// console.log(arr)

// 2. menghapus isi array
// var arr = ["sandhika", "galih", "nofa"]
// arr[1] = undefined
// console.log(arr)

// 3. menampilkan isi array
// var arr = ["sandhika", "galih", "nofa", "eyzar"]

// for( var i = 0;i < arr.length; i++ ) {
//     console.log('mahasiswa ke-' + (i+1) + ' : ' + arr[i]) 
// }

// method pada array
// 1. join
// var arr = ['sandhika', 'galih', 'nofa']
// console.log(arr.join(' - '))

// 2. push & pop
// arr.push('Doddy', 'fitri')
// arr.pop()
// arr.pop()

// console.log(arr.join(' - '))

// 3. unshift & shift
// arr.unshift('doddy')
// arr.shift()
// console.log(arr.join(' - '))

// 1. splice
// splice(indexawal, maudihapusberapa, elemen1, elemen2, ...)

// var arr = ['sandhika', 'galih', 'nofa']
// arr.splice(1, 2, 'doddy', 'fitri')
// console.log(arr.join(' - '))

// 2. slice
// slice(awal, akhir)

// var arr = ['sandhika', 'galih', 'nofa', 'doddy', 'fitri']
// var arr2 = arr.slice(1,4)
// console.log(arr.join(' - '))
// console.log(arr2.join(' - '))

// 6. foreach
// var angka = [1,2,3,4,5,6,7,8,]
// var nama = ['sandhika', 'galih', 'nofa']
// for( var i = 0; i < angka.length; i++) {
//    console.log(angka[i])
// }

// angka.forEach(function(e) {
// console.log(e)
// });
// nama.forEach(function(e, i) {
//    console.log('mahasiswa ke-' + (i+1) + ' adalah : ' + e)
// })

// 7. map
// var angka = [1,2,5,3,6,8,4,]
// var angka2 = angka.map(function(e) {
//    return e * 2
// })
// console.log(angka2.join(' - '))

// 8. sort
// var angka = [1,2,10,5,20,3,6,8,4,]
// angka.sort(function(a,b) {
//    return a-b
// })
// console.log(angka.join(' - '))


// 9. filter & find
var angka = [1,2,10,5,20,3,6,8,4,]
var angka2 = angka.find(function(x) {
    return x > 5
})
console.log(angka2)