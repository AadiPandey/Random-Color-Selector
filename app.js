const button = document.querySelector('button');
const h1 = document.querySelector('h1');

const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
};

const invertColor = (color) => {
    const rgb = color.match(/\d+/g).map(Number);
    const inverted = rgb.map(value => 255 - value);
    return `rgb(${inverted.join(', ')})`;
};

button.addEventListener('click', () => {
    const newColor = randomColor();

    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
    h1.style.color = invertColor(newColor);

    // Button animation
    button.classList.add('flash', 'animate-pop');
    button.addEventListener('animationend', () => {
        button.classList.remove('flash', 'animate-pop');
    }, { once: true });
});