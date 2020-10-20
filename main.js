const name = "Maciek";
const age = 32;

console.log(
    `Witaj Drogi Odwiedzający, nazywam się ${firstName} i mam ${age} lata.`
);
const heading = document.querySelector('.main-heading--js');

heading.innerHTML = `Witaj Drogi Odwiedzjący, nazywam się ${firstName} i mam ${age} lata.`

const emptyParagraph = document.querySelector('.header-two__description--js');
emptyParagraph.innerHTML = `Zmiana treści przez js`;