// 1. komputer mengucapkan salam kepada eyzar
// 2. komputer akan membuat pertanyaan nama anggota selama eyzar menginginkan menginput nama anggota lagi
// 3. computer mengucapkan terima kasih

alert('selamat datang')

var lagi = true

while( lagi ) {
    var nama = prompt('siapa nama anda: ')

    alert('halo ' + nama)

    lagi = confirm('coba lagi?')
}

alert('terima kasih')