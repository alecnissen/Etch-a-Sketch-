const cdiv = document.querySelector('.container'); 


// Add 16 divs 
// find a way to add each grid item not the container  

for (let i = 1; i < 273; i++) { 
    const div = document.createElement('div'); 
    div.addEventListener('mouseover', e => e.target.classList.add('my-color-class'))
    cdiv.appendChild(div); 
}     


// let changeColorOfDivs = cdiv.addEventListener('mouseover', e =>  { 
//     cdiv.style.backgroundColor = 'red'; 
// }) 

// let returnColorOfDivs = cdiv.addEventListener('mouseout', (e) => { 
//     cdiv.style.backgroundColor = 'white';
// })  