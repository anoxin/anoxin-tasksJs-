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
let active = false;
let idInterval;


const animate = ({timing, draw, duration}) => {

    let start = performance.now();
  
    idInterval = requestAnimationFrame(function animate(time) {
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) {
        timeFraction = 1;
      }

      let progress = timing(timeFraction);
  
      draw(progress);
  
      if (timeFraction < 1) {
        idInterval = requestAnimationFrame(animate);
      }
  
    });
};

let sum = 0;

const animation = (goLeft) => {
    animate({
        duration: 8000,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
            let stopLeft = 1000;
                sum = sum + progress;
            // if ((progress * stopLeft) < +circle.style.left.slice(0, -2)) {
            //     return;
            // }
            if (numLeft < stopLeft && goLeft === true) {
                circle.style.left = sum * stopLeft + 'px';
                numLeft = +circle.style.left.slice(0, -2);
            } if (numLeft == 1000 && goLeft !== false) {
                animation(false);
            }
            if (numLeft <= stopLeft && goLeft === false) {
                circle.style.left = (stopLeft - (progress * stopLeft)) + 'px';
                numLeft = +circle.style.left.slice(0, -2);
            }
            if (numLeft == 0 && goLeft !== true) {
                animation(true);
            }
            if (numLeft > 500) {
                circle.style.background = 'green';
            } else {
                circle.style.background = '#83A7C9';
            }
        }
    });
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
