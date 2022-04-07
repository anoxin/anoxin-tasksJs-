const btn = document.getElementById('btn');
const input = document.querySelector('input[type="text"]');
const square = document.getElementById('square');
const eBtn = document.getElementById('e_btn');
const range = document.querySelector('input[type="range"]');
const span = document.getElementById('range-span');
const circle = document.getElementById('circle');
let color = '';

const changesValue = function (event) {
    color = event.target.value;
};

const changesСolor = function (event) {
    square.style.backgroundColor = color;
};

const logger = function (event) {
    span.textContent = event.target.value + '%';
    circle.style = "width: " + event.target.value + "%; " + "height: " + event.target.value + "%;";
};

range.addEventListener('input', logger);
range.addEventListener('change', logger);


input.addEventListener('input', changesValue);
btn.addEventListener('click', changesСolor); 

eBtn.style = "display: none;";