import { animate } from "./helpers";
const one = () => {
    const block = document.querySelector('.block');

    setTimeout(() => {
        animate({
            duration: 1000,
            timing(timeFraction) {
              return timeFraction;
            },
            draw(progress) {
              block.style.left = (50 * progress) + "%";
              block.style.top = (25 * progress) + "%";
              block.style.opacity = progress;
            }
          });
    }, 1500);


};

export default one;