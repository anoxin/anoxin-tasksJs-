document.addEventListener("DOMContentLoaded", ready);

const DomElement = function (selector, height, bg, fontSize, text, marginTop, marginLeft) {
    this.selector = selector;
    this.height = height;
    this.bg = bg;
    this.fontSize = fontSize;
    this.text = text;
    this.width = this.height;
    this.marginTop = marginTop;
    this.marginLeft = marginLeft; 
};

DomElement.prototype.elem = function () {
    if (this.selector[0] === '.') {
        const block = document.createElement('p');
        block.classList.add(this.selector);
        document.querySelector('body').prepend(block);
        block.textContent = this.text;
        block.style.cssText=`height: ${this.height}px;
        background-color: ${this.bg};
        font-size: ${this.fontSize}px;
        width: 500px;
        text-align: center;
      `;
    }
    if (this.selector[0] === '#') {
        const best = document.createElement('p');
        best.id = this.selector;
        document.querySelector('body').prepend(best);
        best.textContent = this.text;
        best.style.cssText=`height: ${this.height}px;
        background-color: ${this.bg};
        font-size: ${this.fontSize}px;
        width: 500px;
        text-align: center;
      `;
    }
};

DomElement.prototype.elem2 = function () {
    let top = 0;
    let left = 0;
    document.addEventListener('keydown', function(event) {
        if (event.code == 'ArrowUp') { 
            top = top - 10;
            start();
        }
        if (event.code == 'ArrowDown') {
            top = top + 10;
            start();
        }
        if (event.code == 'ArrowLeft') {
            left = left - 10;
            start();
        }
        if (event.code == 'ArrowRight') {
            left = left + 10;
            start();
        }
    });
    
    const start = () => {
        if (document.querySelector('div')) {
            document.querySelector('div').remove();
        }
        
        const qualrat = document.createElement('div');
        qualrat.id = this.selector;
        document.querySelector('body').append(qualrat);
        qualrat.style.cssText=`height: ${this.height}px;
        background-color: ${this.bg};
        font-size: ${this.fontSize}px;
        width: ${this.width}px;
        position: absolute;
        margin-top: ${top}px;
        margin-left: ${left}px;
      `;
      
    };
    start();
};

function ready() {
    // debugger;
    newObj3.elem2();
}

const newObj1 = new DomElement('.block', '50', 'red', '40', 'Это объект с классом block');
const newObj2 = new DomElement('#best', '50', 'green', '40', 'Это объект с id best');
const newObj3 = new DomElement('#qualrat', '100', 'yellow', '0', 'Квадрат', '0', '0');

newObj2.elem();
newObj1.elem();
