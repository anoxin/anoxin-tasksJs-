const form = document.getElementById('form');
const username = document.getElementById('username');
const pass = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => { 
            if (request.readyState !== 4) {
                return;
            }
            if (request.status == 201) {
                resolve();
            } else {
                reject(request.status);
            }
        });
        const user = {
            login: username.value,
            password: pass.value
        };
        request.open('POST', 'https://jsonplaceholder.typicode.com/posts');
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify(user));
        request.onload = () => console.log(request.response);
    }); 
 
});



