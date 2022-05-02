const getData = (function  () {
    return fetch('db.json')
    .then(response => response.json());
})()    
    .then(data => {
    console.log(data);
    user(data);
    })
    .catch(error => {
        console.log(error);
    });


const sendData = ({url, data = {}, method = 'GET'}) => {
    return fetch(url, {
        method: method,
        body: data,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    }).then(response => response.json());
};

const user = (data) => {    
    data = JSON.stringify(data); 
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

};

