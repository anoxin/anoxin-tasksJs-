
const DomElement = function (selector, height, width, bg, fontSize, text, position) {
    this.selector = selector;
    this.height = height;
    this.bg = bg;
    this.fontSize = fontSize;
    this.text = text;
    this.width = width;
    this.position = position;
};

DomElement.prototype.addElem = function () {
    const newElem = document.createElement('p');
    const qualrat = document.createElement('div');
    if (this.selector[0] === '.') {
        newElem.classList.add(this.selector.substring(1));
    }
    if (this.selector[0] === '#') {
        newElem.id = this.selector.substring(1);
    }
    if (this.selector === 'square') {
        newElem.id = this.selector;
    }
    document.body.prepend(newElem);
    newElem.textContent = this.text;
    newElem.style.cssText=`height: ${this.height}px;
    background-color: ${this.bg};
    position: ${this.position};
    font-size: ${this.fontSize}px;
    width: ${this.width}px;
    text-align: center;
  `;
};
    
const moveSquare = () => {
    let vertical = 200;
    let horizontal = 0;
    document.getElementById('square').style.top = vertical + 'px';
    document.addEventListener('keydown', function(event) {
        if (event.code == 'ArrowUp') { 
            vertical = vertical - 10;
        }
        if (event.code == 'ArrowDown') {
            vertical = vertical + 10;
        }
        if (event.code == 'ArrowLeft') {
            horizontal = horizontal  - 10;
        }
        if (event.code == 'ArrowRight') {
             horizontal = horizontal  + 10;
        } 
        document.getElementById('square').style.top = vertical + 'px';
        document.getElementById('square').style.left = horizontal + 'px';     
    });   
    
};

const newObj1 = new DomElement('.block', '50', '500', 'red', '40', 'Это объект с классом block');
const newObj2 = new DomElement('#best', '50', '500', 'green', '40', 'Это объект с id best');
const newObj3 = new DomElement('square', '100', '100', 'yellow', '0', 'Квадрат', 'absolute');

newObj2.addElem();
newObj1.addElem();

document.addEventListener("DOMContentLoaded", ready);

function ready() {
    // debugger;
    newObj3.addElem();
    console.log(1);
    moveSquare();   
}


