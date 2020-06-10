// create a button.
// write a function that change the screen.
// target screen.

let screen = document.querySelector('.screen');
let allButtonArray = document.querySelectorAll('li');
//console.log(allbuttonArray);

let currentText = '';

function addAllListeners(param){
    for (let i = 0; i < param.length; i++){
        param[i].addEventListener('click', change);
        //console.log(param[i]);
    }
    
}

addAllListeners(allButtonArray);

function change(param){
    if (param === undefined){
        screen.innerHTML = 'Do math';
    } else {
        currentText = currentText + param.target.innerHTML;
        screen.innerHTML = currentText;
    }
    
    
}
console.log(currentText);