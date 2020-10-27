const firstName = "Jakub";
const age = 27;


const heading = document.querySelector('.main__heading--js');

heading.innerHTML = `Witaj Drogi Odwiedzjący, nazywam się ${firstName} i mam ${age} lata.`

const emptyParagraph = document.querySelector('.hotgreen__description--js');
emptyParagraph.innerHTML = `Nawet uzupelnilem tresc javascriptem`;


function greet(age, firstName) {
    console.log(
        `Witaj Drogi Odwiedzjący, nazywam się ${firstName} i mam ${age} lata.`
    );
}
        greet(age, firstName)

