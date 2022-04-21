function startApp(num) {
    let sum = 10;
    let victory = false;
    let answer = false;
    let myNum = prompt('Угадай число от 1 до 100!!! У вас есть ' + sum + ' попыток');

    function comparingNumber() {
        sum--;
        console.log(myNum);
        if (sum < 0) {
            answer = confirm( 'Попытки закончились, хотите сыграть еще?');
        } else if (myNum == null) {
            alert('Игра закончена');
        } else if (myNum == '' || myNum == undefined) {
            sum++;
            myNum = prompt('Введи число! Осталось ' + sum + ' попыток');
            comparingNumber();
        } else {
            myNum = +myNum;
            if (num < myNum) {
                myNum = prompt('Загаданное число меньше! Осталось ' + sum + ' попыток');
                comparingNumber(num);
            } else if (num > myNum) {
                myNum = prompt('Загаданное число больше Осталось ' + sum + ' попыток');
                comparingNumber(num);
            } else if (num === myNum) {
                victory = confirm('Поздравляю, Вы угадали число ' + num + '!!! Хотели бы сыграть еще?');
            } else {
                sum++;
                myNum = prompt('Введи число! Осталось' + sum + ' попыток');
                comparingNumber(num);
            }

        }
        
    }
    comparingNumber();
    if (victory == true || answer == true) {
        startApp(num);
    }
}


startApp(Math.floor (Math.random () * (100 - 0 + 1)) + 0);