const cdiv = document.querySelector('.container');  
let containerDiv = document.querySelector('div'); 

// cdiv.setAttribute('style', align-items: center); 

let grid = function defaultGrid() { 
for (let i = 0; i < 256; i++) { 
const div = document.createElement('div'); 
// div.addEventListener('mouseover', e => e.target.classList.add('my-color-class')); 
cdiv.appendChild(div);   
document.append.body;  
}
} 

grid(); 



function draw() { 
cdiv.addEventListener('mouseover', e => e.target.classList.add('my-color-class')); 
// cdiv.appendChild(containerDiv); 
document.append.body;
} 


function erase() { 
    cdiv.addEventListener('mouseover', e => e.target.classList.add('change-background')); 
    // cdiv.appendChild(containerDiv); 
    // document.append.body; 
// while (cdiv.firstChild) {  
//     cdiv.removeChild(cdiv.lastChild);    
}  



// function reset() { 

// }


 
 
 

function gridPrompt() {        
    
    let userInput = prompt('Enter the number of rows or columns'); 
    
    // globalSize = `${userInput}`; 

    
    if (userInput <= 100) {  
        erase();                        

    for (let i = 0; i < (userInput ** 2); i++) {      
        const div = document.createElement('div'); 
        div.setAttribute('style', `width:${400/userInput}px; height: ${400/userInput}px`); 
        div.addEventListener('mouseover', e => e.target.classList.add('my-color-class'));  
        cdiv.appendChild(div);    
    } 

    // for (let i = 0; i < userInput; i++) { 
    //     const div = document.createElement('div'); 
    //     div.addEventListener('mouseover', e => e.target.classList.add('my-color-class'));  
    //     cdiv.appendChild(div);  

    // }

} 
} 



         
   

// create function to reset the board, so userinput can be updated 





// // grab the erase id or class
// let eraseBtn = document.getElementsByClassName('.erase-btn'); 


// click function, function will reset the board to it's OG shape, copy the loop sequence above 

// eraseBtn.addEventListener('click', e => {
//     for (let i = 0; i < 256; i++) { 
//         const div = document.createElement('div'); 
//         div.addEventListener('mouseover', e => e.target.classList.add('my-color-class')); 
//         cdiv.appendChild(div);   
//         document.append.body;  
// } 
// }
// change the color class to white 
// should show a white 16x16 board 
 
// function erase() { 
//     cdiv.(originalGridSize); 
//         // cdiv.style.backgroundColor = 'white';
//     }  





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
