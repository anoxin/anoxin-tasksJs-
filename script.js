const form = document.getElementById('form');
const username = document.getElementById('username');
const pass = document.getElementById('password');

const getData = (function  () {
    return fetch('db.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    }); 
})();

const sendData = ({url, data = {}, method = 'GET'}) => {
    return fetch(url, {
        method: method,
        body: data,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    }).then(response => response.json());
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const user = {
        login: username.value,
        password: pass.value
    };
    const data = JSON.stringify(user); 
    sendData({
        url: 'https://jsonplaceholder.typicode.com/posts', 
        data: data,
        method: 'POST'
    })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });
});