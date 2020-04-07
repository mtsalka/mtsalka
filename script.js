'use strict';

// input area

const inputArea = document.createElement('section');
document.body.appendChild(inputArea);
inputArea.classList.add('input-area');


const inputBox = document.createElement('textarea');
inputArea.appendChild(inputBox);
inputBox.classList.add('input-box');

//keyboard area

const keyboardArea = document.createElement('section');
document.body.appendChild(keyboardArea);
keyboardArea.classList.add('keyboard-area');

//keyboard symbols

let keySymbols = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace'], 
    ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'delete'],
    ['capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'enter'], 
    ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'up', 'shift'],
    ['crtl', 'win', 'alt', 'space', 'alt', 'ctrl', 'left', 'down', 'right']
];


function displaySymbols(keySymbols) {

    //for row creation
    for (let i = 0; i < keySymbols.length; i++) {

        let layoutRow = document.createElement('div');
        keyboardArea.appendChild(layoutRow);
        layoutRow.classList.add('layout-row');

        //for keyboard-symbol creation
        for (let el = 0; el < keySymbols[i].length; el++) {

            let symbol = document.createElement('button');
            layoutRow.appendChild(symbol);
            symbol.classList.add('keyboard-symbol');

            
            symbol.value = keySymbols[i][el];
            symbol.textContent = symbol.value;   

            symbol.addEventListener('click', () => {
                let inp = symbol.value;
                inputBox.value += inp;
            })

        }
    }
}

displaySymbols(keySymbols);


//set active class 


let pressed = document.getElementsByClassName('keyboard-symbol');


[...pressed].forEach((element) => {
    element.addEventListener('click', function setActive() {
        this.classList.toggle('active');

        if (this.classList.contains('active')) {
            setTimeout( () => {
                this.classList.remove('active');
            }, 100);
        }
    })
})


//Array.from(press, el => el.addEventListener('click', e => {...})); 










