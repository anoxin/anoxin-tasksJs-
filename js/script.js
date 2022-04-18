const country = document.getElementById('country');
const city = document.getElementById('city');
const result = document.querySelector('.result');

const cityArr = {
    rus: ['Москва', 'Санк-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород', 'Казань', 'Челябинск'],
    uk: ['Киев', 'Харьков', 'Одесса', 'Днепр', 'Донецк', 'Запорожье', 'Львов'],
    bel: ['Минск', 'Гомель', 'Могилёв', 'Витебск', 'Гродно', 'Брест'],
    jap: ['Токио', 'Киото', 'Осака', 'Иокогама'] 
};


const showCities = function () {
    let newArr;
    let numberCity = 0;
    city.style.display = 'inline-block';
    city.innerHTML = ''; 

    do { 
        let option = document.createElement('option');
        city.append(option);
    
        if (country.value == 'rus') {
            newArr = cityArr.rus;
            option.textContent = cityArr.rus[numberCity];
        }
        if (country.value == 'uk') {
            newArr = cityArr.uk;
            option.textContent = cityArr.uk[numberCity];
        }   
        if (country.value == 'bel') {
            newArr = cityArr.bel;
            option.textContent = cityArr.bel[numberCity];
        }
        if (country.value == 'jap') {
            newArr = cityArr.jap;
            option.textContent = cityArr.jap[numberCity];
        }
        
        option.setAttribute('value', numberCity);
        numberCity++;
    } while (numberCity < newArr.length);
};

const showResult = function () {
    result.textContent = `${document.querySelector(`[value="${country.value}"]`).textContent} 
    ${document.querySelector(`[value="${city.value}"]`).textContent}`;
};

country.addEventListener('change', showCities);
city.addEventListener('change', showResult);