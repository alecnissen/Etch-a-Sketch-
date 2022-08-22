const cdiv = document.querySelector('.container'); 




// Add 16 divs 
// find a way to add each grid item not the container  
// < 273 // userInput power of 2 ** 2
for (let i = 0; i < 256; i++) { 
    const div = document.createElement('div'); 
    div.addEventListener('mouseover', e => e.target.classList.add('my-color-class')); 
    cdiv.appendChild(div);   
    document.append.body;  
}     

// seperate container and then append the appropriate number of divs to that container?? 
function gridPrompt() { 
    let userInput = prompt('Enter the number of squares per side for a new grid'); 

    for (let i = 1; i < userInput; i++) { 
        const div = document.createElement('div'); 
        div.addEventListener('mouseover', e => e.target.classList.add('my-color-class'));  
        cdiv.appendChild(div);   


        // cdiv.style.gridTemplateRows = `repeat(${userInput}, 1fr)`; 
        // cdiv.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`; 
    } 




}  


 
// function resetSize() { 
//     resizeBtn.addEventListener('click', () => { 
//         let userInput = prompt('Enter the number of squares per side for a new grid'); 
//         cdiv.style.gridTemplateRows = `repeat(${userInput}, 1fr)`; 
//         cdiv.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;
//     })
//     resetSize(); 
// }

 

// let changeColorOfDivs = cdiv.addEventListener('mouseover', e =>  { 
//     cdiv.style.backgroundColor = 'red'; 
// }) 

// let returnColorOfDivs = cdiv.addEventListener('mouseout', (e) => { 
//     cdiv.style.backgroundColor = 'white';
// })  