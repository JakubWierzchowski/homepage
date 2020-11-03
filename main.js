const firstName = "Jakub";
const age = 27;



const emptyParagraph = document.querySelector(".hotgreen__description--js");
emptyParagraph.innerHTML = `Nawet uzupelnilem tresc javascriptem`;

function greet(age, firstName) {
  console.log(
    `Witaj Drogi Odwiedzjący, nazywam się ${firstName} i mam ${age} lata.`
  );
}
greet(age, firstName);

const button = document.querySelector(".action--js");
console.log(button);
const myClick = () => {
    const heading = document.querySelector(".hot-pink2--js");
    heading.innerHTML = `Jestem lepszy niz Jiimii`;
    heading.classList.toggle('klasa__z--js')
};
button.addEventListener('click', myClick);




const hamburger = document.querySelector(".hamburger--js");
hamburger.addEventListener('click', () => {
    const nav= document.querySelector('.navigation--js');
    nav.classList.toggle('navigation--open');
})


