const slides = document.getElementById("slides");
const buttons = document.querySelectorAll(".btn");
const slideItems = document.querySelectorAll("#slides > div");

let current = 0;
const totalSlides = slideItems.length;

// Calcula a largura do slide + o gap
function getSlideWidth() {
    const slide = slideItems[0];

    // gap-10 = 2.5rem = 40px
    const gap = 40;

    return slide.offsetWidth + gap;
}

function updateCarousel() {

    const distance = current * getSlideWidth();

    slides.style.transform = `translateX(-${distance}px)`;

    buttons.forEach((button, index) => {

        if (index === current) {
            button.classList.remove("bg-gray-300");
            button.classList.add("bg-gray-400");
        } else {
            button.classList.remove("bg-gray-400");
            button.classList.add("bg-gray-300");
        }

    });

}

// Clique nas bolinhas
buttons.forEach((button, index) => {

    button.addEventListener("click", () => {

        current = index;

        updateCarousel();

        restartAutoSlide();

    });

});

// Próximo slide
function nextSlide() {

    current++;

    if (current >= totalSlides) {
        current = 0;
    }

    updateCarousel();

}

// Slide anterior
function previousSlide() {

    current--;

    if (current < 0) {
        current = totalSlides - 1;
    }

    updateCarousel();

}

// Auto Slide
let autoSlide = setInterval(nextSlide, 5000);

function restartAutoSlide() {

    clearInterval(autoSlide);

    autoSlide = setInterval(nextSlide, 5000);

}

// Atualiza caso a janela seja redimensionada
window.addEventListener("resize", updateCarousel);

// Inicializa
updateCarousel();