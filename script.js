function startApp(min, max) {
    const num = Math.floor (Math.random () * (max - min) + min);
    let sum = 10;
    let victory = false;
    let answer = false;
    let myNum = prompt('Угадай число от 1 до 100!!! У вас есть ' + sum + ' попыток');

    function comparingNumber() {
        sum--;
        if (sum < 0) {
            answer = confirm( 'Попытки закончились, хотите сыграть еще?');
            return;
        } else if (myNum == null) {
            alert('Игра закончена');
            return;
        } else if (myNum == '' || isNaN(myNum)) {
            sum++;
            myNum = prompt('Введи число! Осталось ' + sum + ' попыток');
        } else {
            if (num == myNum) {
                victory = confirm('Поздравляю, Вы угадали число ' + num + '!!! Хотели бы сыграть еще?');
                return victory;
            } else if (Math.max(num, +myNum) == num) {
                myNum = prompt('Загаданное число больше! Осталось ' + sum + ' попыток');
            } else {
                myNum = prompt('Загаданное число меньше! Осталось ' + sum + ' попыток');

            }  
        }
        comparingNumber();
        
    }
    comparingNumber();
    if (victory == true || answer == true) {
        startApp(0, 100);
    }
}

startApp(0, 100);


