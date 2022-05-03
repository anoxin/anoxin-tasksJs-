const input = document.querySelector('input');
const text = document.querySelector('p');
let timeShow;
let data = 0;

function debounce(fn, ms) {
        return (args) => {
            clearTimeout(timeShow);
            timeShow = setTimeout(() => {
                    fn.apply(this, args);
                    console.log(data);
                }, ms);
        };
  }

input.addEventListener('input', debounce(() => {
    text.textContent = input.value;
}, 300));
