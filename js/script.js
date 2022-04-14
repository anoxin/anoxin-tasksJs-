const todoControl = document.querySelector('.todo-control');
const headerInput = document.querySelector('.header-input');
const todoList = document.querySelector('.todo-list');
const todoCompleted = document.querySelector('.todo-completed');
const todoRemove = document.querySelector('.todo-remove');

let toDoData = [];

let myFunc = () => {
    toDoData = JSON.parse(localStorage.getItem('user'));
    render();
};

const render = function () {
    todoList.innerHTML = '';
    todoCompleted.innerHTML = '';
    toDoData.forEach(function (item) {
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.innerHTML = '<span class="text-todo">' + item.text + '</span>' +
        '<div class="todo-buttons">' +
		'<button class="todo-remove"></button>' +
		'<button class="todo-complete"></button>' +
		'</div>';

       if (item.completed) {
            todoCompleted.append(li);
        } else {
            todoList.append(li);
        }
        li.querySelector('.todo-complete').addEventListener('click', function () {
            item.completed = !item.completed;
            render();
        });

        li.querySelector('.todo-remove').addEventListener('click', function () {
            
            let result = toDoData.findIndex(function(item) {
                return item.text === li.innerText;
            });
            toDoData.splice(result, 1);
            localStorage.user = JSON.stringify(toDoData);
            render();
        });
        localStorage.user = JSON.stringify(toDoData);
    });
};

todoControl.addEventListener('submit', function (event) {
    event.preventDefault();
    let checkingName = true;

    const newArr = toDoData.filter(function(item) {
        return item.text === headerInput.value;
    });

    if (headerInput.value !== '' && newArr.length == 0) {
        const newToDo = {
            text: headerInput.value,
            completed: false
        };
        toDoData.push(newToDo);
        headerInput.value = '';

        render();
    }
 
});

myFunc();