'use strict';

//legend

const legend = document.createElement('section');
document.body.appendChild(legend);
legend.classList.add('legend');

let opt1 = document.createElement('p');
let opt2 = document.createElement('p');

let optEng = document.createTextNode('English: Ctrl + E');
let optRu = document.createTextNode('Russian: Ctrl + R');

legend.appendChild(opt1);
legend.appendChild(opt2);

opt1.appendChild(optEng);
opt2.appendChild(optRu);


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