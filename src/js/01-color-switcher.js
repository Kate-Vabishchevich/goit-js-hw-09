
const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
    body: document.querySelector('body'),
}

const TIME_INTERVAL = 1000;
let intervalId = null;

refs.startBtn.addEventListener('click', onStartBtn);
refs.stopBtn.addEventListener('click', onStopBtn);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBodyColor() {
    const color = getRandomHexColor();
    refs.body.style.backgroundColor = color;
} 

function onStartBtn() {
    intervalId = setInterval(changeBodyColor, TIME_INTERVAL);
    refs.startBtn.setAttribute('disabled', true)
}

function onStopBtn() {
    clearInterval(intervalId);
    refs.startBtn.removeAttribute('disabled');
}