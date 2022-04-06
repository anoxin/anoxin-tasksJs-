const books = document.querySelectorAll('.book');
const myBooks = document.querySelector('.books');
const body = document.querySelector('body');
const adv = document.querySelector('.adv');
const myBooks2 = books[0].querySelector('ul');
const books2 = books[0].querySelectorAll('li');
const myBooks5 = books[5].querySelector('ul');
const books5 = books[5].querySelectorAll('li');
const myBooks6 = books[2].querySelector('ul');
const books6 = books[2].querySelectorAll('li');
const cloneElemBook6 = books6[0].cloneNode(true);

console.log(cloneElemBook6);

let numBooks = 6;
let chapters2 = 5;
let chapters5 = 6;


let myFunc = function () {
    for (let i = 0; i < books.length; i++) {
        let num = +books[i].innerText[6];
        if (num == numBooks) {
            myBooks.prepend(books[i]);
            numBooks--;
            myFunc();
        }
    }
};

let myFunc2 = function () {
    for (let i = 2; i < books2.length; i++) {
        let num = +books2[i].innerText[6];
        if (num == chapters2) {
            myBooks2.prepend(books2[i]);
            chapters2--;
            myFunc2();
        }
    }
};

let myFunc3 = function () {
    for (let i = 2; i < books5.length; i++) {
        let num = +books5[i].innerText[6];
        if (num == chapters5) {
            myBooks5.prepend(books5[i]);
            chapters5--;
            myFunc3();
        }
    }
};

myFunc();
myFunc2();
myFunc3();

body.style.backgroundImage = "url(./image/myBooks.jpeg)";
books[4].querySelector('a').innerText = 'Книга 3. this и Прототипы Объектов';
adv.remove();

myBooks2.prepend(books2[1]);
myBooks2.prepend(books2[0]);
myBooks2.append(books2[7]);
myBooks2.append(books2[9]);
myBooks2.append(books2[2]);
myBooks2.append(books2[10]);

myBooks5.prepend(books5[1]);
myBooks5.prepend(books5[0]);
myBooks5.append(books5[5]);
myBooks5.append(books5[8]);
myBooks5.append(books5[10]);

cloneElemBook6.textContent = 'Глава 8: За пределами ES6';
myBooks6.append(cloneElemBook6);
myBooks6.append(books6[9]);