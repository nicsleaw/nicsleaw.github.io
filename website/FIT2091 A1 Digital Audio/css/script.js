function playSound() {
    document.querySelector('#audio').play();
}
function pauseSound() {
    document.querySelector('#audio').pause();
}
function stopSound() {
    document.querySelector('#audio').load();
}


document.querySelector('#playb').addEventListener('click', playSound);

document.querySelector('#pauseb').addEventListener('click', pauseSound);

document.querySelector('#stopb').addEventListener('click', stopSound);