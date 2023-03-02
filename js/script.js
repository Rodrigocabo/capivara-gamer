const capivara  = document.querySelector('.capivara');
const pipe = document.querySelector('.pipe');

const jump = () => {
capivara.classList.add('jump');

setTimeout(() => {

    capivara.classList.remove('jump');

},500)
}

const loop = setInterval(() =>{
    const pipePosition = pipe.offsetLeft;
    const capivaraPosition = +window.getComputedStyle(capivara).bottom.replace('px', '');

    if (pipePosition < 120  && pipePosition > 0 && capivaraPosition < 80) {

        pipe.style.animation = 'none';
    pipe.style.left =  `${pipePosition}px`;
    
    capivara.style.animation = 'none';
    capivara.style.bottom =  `${capivaraPosition}px`;

    capivara.src = './image/capivara.3png.gif';
    capivara.style.width = '75px'
    capivara.style.marginleft = '50px'
    
    clearInterval(loop);
    }

}, 10);
document.addEventListener('keydown' , jump);