const slides = document.getElementById("slides");
const buttons = document.querySelectorAll(".btn");
const slideItems = document.querySelectorAll("#slides > div");

let current = 0;
const totalSlides = slideItems.length;

function getSlideWidth() {
    const slide = slideItems[0];
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


buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        current = index;
        updateCarousel();
        restartAutoSlide();
    });

});


function nextSlide() {
    current++;
    if (current >= totalSlides) {
        current = 0;
    }
    updateCarousel();
}


function previousSlide() {
    current--;
    if (current < 0) {
        current = totalSlides - 1;
    }
    updateCarousel();

}


let autoSlide = setInterval(nextSlide, 5000);

function restartAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 5000);

}


window.addEventListener("resize", updateCarousel);

updateCarousel();



const carousel = document.getElementById("carousel");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

function getWidth() {
    const product = document.querySelector(".product");
    const computedStyle = window.getComputedStyle(product);
    const marginRight = parseFloat(computedStyle.marginRight) || 0;
    const marginLeft = parseFloat(computedStyle.marginLeft) || 0;
    const gap = parseFloat(window.getComputedStyle(carousel).gap) || 0;

    return product.offsetWidth + marginLeft + marginRight + gap;
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

setInterval(moveNext, 4000);


 document.addEventListener('DOMContentLoaded', function() {
      const mapa = L.map('mapa').setView([-7.216942, -39.310572], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
      }).addTo(mapa);
      L.marker([-7.216942, -39.310572]).addTo(mapa)
        .bindPopup('Limoo - Juazeiro do Norte - CE<br>Estamos aqui!')
        .openPopup();
    });

function closeMobileMenu() {
   const menuMobile = document.querySelector('.mobile-menu');
   const menuButton = document.querySelector('.mobile-menu-icon button');
   const menuIcon = document.querySelector('.mobile-menu-icon .icon');

   menuMobile.classList.remove('open');
   menuIcon.src = "assets/images/icons8-cardápio-24.png";
   menuButton.setAttribute('aria-expanded', 'false');
   menuIcon.alt = 'Abrir menu';
}

function menuShow() {
   const menuMobile = document.querySelector('.mobile-menu');
   const menuButton = document.querySelector('.mobile-menu-icon button');
   const menuIcon = document.querySelector('.mobile-menu-icon .icon');
   const isOpen = menuMobile.classList.toggle('open');

   menuIcon.src = isOpen ? "assets/images/icons8-letra-x-24.png" : "assets/images/icons8-cardápio-24.png";
   menuButton.setAttribute('aria-expanded', isOpen);
   menuIcon.alt = isOpen ? 'Fechar menu' : 'Abrir menu';
}

const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
mobileNavLinks.forEach((link) => {
    link.addEventListener('click', closeMobileMenu);
});

