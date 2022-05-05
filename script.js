function startApp(min, max) {
    const num = Math.floor (Math.random () * (max - min) + min);
    let myNum = prompt('Угадай число от 1 до 100');
    
    function comparingNumber() {
        if (myNum == '' || myNum == undefined) {
            myNum = prompt('Введи число');
            comparingNumber();
        } else {
            myNum = +myNum;
            if (num < myNum) {
                myNum = prompt('Загаданное число меньше');
                comparingNumber(num);
            } else if (num > myNum) {
                myNum = prompt('Загаданное число больше');
                comparingNumber(num);
            } else if (num === myNum) {
                alert('Игра окончена');
            } else {
                myNum = prompt('Введи число');
                comparingNumber(num);
            }

        }
    }
    comparingNumber();
}

startApp(0, 100);