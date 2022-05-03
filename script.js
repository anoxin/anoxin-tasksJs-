const body = document.body;
body.innerHTML = '<div></div>';
const circle = document.querySelector('div');
circle.insertAdjacentHTML('afterend', '<button>reset</button>');
circle.insertAdjacentHTML('afterend', '<button>старт/пауза</button>');
const start = document.querySelectorAll('button')[0];
const reset = document.querySelectorAll('button')[1];
circle.style.cssText = `position: absolute;
width: 100px; 
height: 100px;
background: #83A7C9;
border-radius: 50%
`;

start.style.cssText = `
background-color: #4CAF50;
border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 150px 30px 0px 30px;
`;

reset.style.cssText = `
background-color: red; /* Green */
border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
`;

let numLeft = 0;
let count = 0;
let active = false;
let goLeft = true;
let idInterval;

const animation = () => {
    if (goLeft === true) {
        count++;
    } else {
        count--;
    }
    idInterval = requestAnimationFrame(animation);
    
    if (numLeft < 1000 && goLeft === true) {
        circle.style.left = count * 5 + 'px';
        numLeft = +circle.style.left.slice(0, -2);
        
    } else {
        goLeft = false;
    }
    if (numLeft > 0  && goLeft === false) {
        circle.style.left = count * 5 + 'px';
        numLeft = +circle.style.left.slice(0, -2);
        console.log('abu');
    } 
    if (numLeft <= 0  && goLeft === false) {
        goLeft = true;
    }
};

start.addEventListener('click', () => {
    if (active) {
        cancelAnimationFrame(idInterval);
        active = false;
    } else {
        animation(true);
        active = true;
                
    }
});

reset.addEventListener('click', () => {
        cancelAnimationFrame(idInterval);
        circle.style.left = 0 + 'px';
        count = 0;
        if (active) {
            active = false;
        } 
});