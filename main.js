const cdiv = document.querySelector('.container');  



// function defaultGrid() {        
    for (let i = 0; i < 256; i++) { 
        const div = document.createElement('div'); 
        // div.addEventListener('mouseover', e => e.target.classList.add('my-color-class')); 
        cdiv.appendChild(div);   
        // document.append.body;  
    }
    // } 
    
    // defaultGrid(); 
    
    // old erase function code 
    // while (cdiv.firstChild) {  
    //     cdiv.removeChild(cdiv.lastChild);    


function draw() {      
cdiv.addEventListener('mouseover', e => { 
    e.target.classList.remove('change-background'); 
    e.target.classList.add('my-color-class'); 
})  
} 

let eraseButton = document.getElementById('erase-btn'); 

eraseButton.addEventListener('click', e => { 
    let children = cdiv.childNodes;  
    children.forEach((child) => {   
    child.addEventListener('mouseover', e => { 
    child.style.backgroundColor = 'white'; 
})
    }) 
})
// function erase() { 
//     cdiv.addEventListener('mouseover', e => { 
//         // let div = cdiv.childNodes
//         // e.target.classList.remove('my-color-class'); 
//         // e.target.classList.remove('randomColor'); 
//         // // e.target.classList.add('change-background');  
//         e.target.style.backgroundColor = 'white';   
//     }) 
// }  

function clear() { 
    while (cdiv.firstChild) {  
        cdiv.removeChild(cdiv.lastChild);  
    }
} 

function clearPaint() { 

    let children = cdiv.childNodes;     
    button.removeEventListener('click', button); 
    children.forEach(function(child) { 

            child.classList.remove('my-color-class'); 
            child.classList.remove('change-background'); 
            child.classList.remove('randomColor'); 
            child.style.backgroundColor = 'white'; 
        })
    }




function gridPrompt() {        
    
    let userInput = prompt('Enter the number of rows or columns'); 
    
    // globalSize = `${userInput}`; 

    
    if (userInput <= 100) {  
       clear();

    for (let i = 0; i < (userInput ** 2); i++) {      
        const div = document.createElement('div'); 
        div.setAttribute('style', `width:${400/userInput}px; height: ${400/userInput}px`); 
        // div.addEventListener('mouseover', e => e.target.classList.add('my-color-class'));  
        cdiv.appendChild(div);    
    } 

    
} 
} 
 
// generate random colors on mouseover 

//  function randomColorMaker () { 
//     const randomColor = Math.floor(Math.random() * 16777215).toString(16); 
// }


// const setBg = () => {     
//     let children = cdiv.childNodes;  
//     children.forEach((child) => {   
//     const randomColor = Math.floor(Math.random() * 16777215).toString(16); 
//     child.style.backgroundColor = "#" + randomColor; 
//     child.addEventListener('mouseover', randomColor);   
//     })  
// }            
 
// setBg()                                   



let button = document.getElementById('random-color-btn'); 

button.addEventListener('click', e => { 
    let children = cdiv.childNodes;  
    children.forEach((child) => {   
    const randomColor = Math.floor(Math.random() * 16777215).toString(16); 
    child.addEventListener('mouseover', e => { 
    child.style.backgroundColor = "#" + randomColor; 
})

    })    
})     





// function setBg () {     
//     let children = cdiv.childNodes;  
//     children.forEach((child) => {   
//     const randomColor = Math.floor(Math.random() * 16777215).toString(16); 
//     child.addEventListener('mouseover', e => { 
//     child.style.backgroundColor = "#" + randomColor; 
    
//     });   
// })       
// }            

// setBg();      
 



// for (let i = 0; i < userInput; i++) { 
//     const div = document.createElement('div'); 
//     div.addEventListener('mouseover', e => e.target.classList.add('my-color-class'));  
//     cdiv.appendChild(div);  

// }
         
   

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
