/*let newBtn = document.createElement('button');
newBtn.id = 'btnId';*/
//Added btn in Html and added id
const btn = document.createElement('button');
const node = document.createTextNode('Click me');
btn.appendChild(node);
btn.id = 'btnId';
const element = document.getElementById('div1');
element.appendChild(btn);

element.style.textAlign = 'center';

// Change bg
//let bodyColorChange = document.body.style.backgroundColor = 'orange';
//let randomColor = Math.floor(Math.random() * 16777215).toString(16);
//document.getElementById('btnId').style.backgroundColor =  'red'; 

let colors = ['yellow', 'red', 'green', 'blue', 'black', 'orange', 'pink'];

let button = document

