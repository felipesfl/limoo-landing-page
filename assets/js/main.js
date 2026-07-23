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



const carousel = document.getElementById("carousel");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

const gap = 56; // gap-14 = 56px

function getWidth() {

    const product = document.querySelector(".product");

    return product.offsetWidth + gap;

}

function moveNext() {

    const width = getWidth();

    carousel.style.transition = "transform .5s ease";

    carousel.style.transform = `translateX(-${width}px)`;

    carousel.addEventListener("transitionend", function handler() {

        carousel.appendChild(carousel.firstElementChild);

        carousel.style.transition = "none";

        carousel.style.transform = "translateX(0)";

        carousel.removeEventListener("transitionend", handler);

    });

}

function movePrev() {

    const width = getWidth();

    carousel.style.transition = "none";

    carousel.prepend(carousel.lastElementChild);

    carousel.style.transform = `translateX(-${width}px)`;

    requestAnimationFrame(() => {

        carousel.style.transition = "transform .5s ease";

        carousel.style.transform = "translateX(0)";

    });

}

next.addEventListener("click", moveNext);

prev.addEventListener("click", movePrev);

// Auto Slide
setInterval(moveNext, 4000);