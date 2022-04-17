// DOM Selection
// document.getElementById() 
// document.getElementsByTagName()
// document.getElementByClassName()

// document.querySelector() -> element
//const p4 = document.querySelector('#b p')
// p4.style.color = 'orange'
// p4.style.fontSize = '30px'

// const li2 = document.querySelector('section#b ul li:nth-child(2)')
// li2.style.backgroundColor = 'green'



// document.querySelectorAll()

// sendiri sendiri
// const p = document.querySelectorAll('p')
// p[2].style.backgroundColor = 'pink'

// looping
//for ( let i = 0; i< p.length; i++ ) {
//     p[i].style.backgroundColor = 'lightblue'
// }





// mengubah node-root
const sectionB = document.querySelector('section#b')
const p4 = sectionB.getElementsByTagName('p')[0]
p4.style.backgroundColor = 'orange'
