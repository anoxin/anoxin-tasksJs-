let num;
let sum;

function one() {
    num = Math.floor (Math.random () * (100 - 0 + 1)) + 0;
    sum = 10;
    let myNum = prompt('Угадай число от 1 до 100!!! У вас есть ' + sum + ' попыток');
    
    function two() {
        sum--;
        console.log(myNum);
        if (sum < 0) {
            let answer = confirm( 'Попытки закончились, хотите сыграть еще?');
            if (answer == true) {
                one(num);
            }

        } else if (myNum == null) {
            alert('Игра закончена');
        } else if (myNum == '' || myNum == undefined) {
            sum++;
            myNum = prompt('Введи число! Осталось ' + sum + ' попыток');
            two();
        } else {
            myNum = +myNum;
            if (num < myNum) {
                myNum = prompt('Загаданное число меньше! Осталось ' + sum + ' попыток');
                two(num);
            } else if (num > myNum) {
                myNum = prompt('Загаданное число больше Осталось ' + sum + ' попыток');
                two(num);
            } else if (num === myNum) {
                let victory = confirm('Поздравляю, Вы угадали число ' + num + '!!! Хотели бы сыграть еще?');
                if (victory == true) {
                    one(num);
                }
            } else {
                myNum = prompt('Введи число! Осталось' + sum + ' попыток');
                sum++;
                two(num);
            }

        }
        
    }
    two();
}


one(num);