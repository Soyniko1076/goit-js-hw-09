let idInt = null;

const refs = {
    btnStart: document.querySelector('button[data-start]'),
    btnStop: document.querySelector('button[data-stop]'),
    body: document.querySelector('body'),
}


refs.btnStop.disabled = true;
refs.btnStart.addEventListener('click', onBtnStartChangeColor);
refs.btnStop.addEventListener('click', onBtnStopChangeColor);


function onBtnStartChangeColor() {
    refs.btnStart.disabled = true;
    refs.btnStop.disabled = false;
   
    idInt = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor()
    }, 1000);
}

function onBtnStopChangeColor() {
    refs.btnStart.disabled = false;
    refs.btnStop.disabled = true;
  

    clearInterval(idInt);
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
