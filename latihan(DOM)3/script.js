// DOM Selection
// document.getElementById() -> element
const judul = document.getElementById('judul')
judul.style.color = 'red'
judul.style.backgroundColor = 'black'
judul.innerHTML = 'Sandhika galih'

// document.getElementsByTagName()
// -> HTMLCollections
const p = document.getElementsByTagName('p')

// sendiri-sendiri
// p[0].style.backgroundColor = 'pink'
// p[1].style.backgroundColor = 'pink'
// p[2].style.backgroundColor = 'pink'
// p[3].style.backgroundColor = 'pink'

// looping
for( let i = 0; i < p.length; i++ ) {
    p[i].style.backgroundColor = 'pink'
}

const h1 = document.getElementsByTagName('h1')[0]
h1.style.fontSize = '50px'

//document.getElementByClassName()
// -> HTMLCollection
const p1 = document.getElementsByClassName('p1')
p1[0].innerHTML = 'ini diubah dari javascript'