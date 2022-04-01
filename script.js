let num = Math.floor (Math.random () * (100 - 0 + 1)) + 0;

function one() {
    let myNum = prompt('Угадай число от 1 до 100');
    
    function two() {
        if (myNum == '' || myNum == undefined) {
            myNum = prompt('Введи число');
            two();
        } else {
            myNum = +myNum;
            if (num < myNum) {
                myNum = prompt('Загаданное число меньше');
                two(num);
            } else if (num > myNum) {
                myNum = prompt('Загаданное число больше');
                two(num);
            } else if (num === myNum) {
                alert('Игра окончена');
            } else {
                myNum = prompt('Введи число');
                two(num);
            }

        }
    }
    two();
}

one(num);