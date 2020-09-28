let fontSize = 16;

const updateFontSize = ()=> {
    localStorage.setItem('font-size', fontSize);
    document.querySelector('.fonts-zoom__item').textContent = fontSize;
    document.body.style.fontSize = fontSize + 'px';
}

if (localStorage.getItem('font-size')){
    fontSize = localStorage.getItem('font-size');
}
updateFontSize();

document.querySelector('.fonts-zoom__plus').onclick = () => {
    fontSize++;
    updateFontSize();
}

document.querySelector('.fonts-zoom__minus').onclick = () => {
    fontSize--;
    updateFontSize();
}

