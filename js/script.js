const DomElement = function (selector, height, bg, fontSize, text) {
    this.selector = selector;
    this.height = height;
    this.bg = bg;
    this.fontSize = fontSize;
    this.text = text;
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

const newObj1 = new DomElement('.block', '50', 'red', '40', 'Это объект с классом block');
const newObj2 = new DomElement('#best', '50', 'green', '40', 'Это объект с id best' );

newObj2.elem();
newObj1.elem();