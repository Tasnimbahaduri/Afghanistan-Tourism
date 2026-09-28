const hero = document.querySelector(".gallery-hero");

const heroImages = [
    "https://images.pexels.com/photos/17688373/pexels-photo-17688373.jpeg",

    "https://images.pexels.com/photos/39038305/pexels-photo-39038305.jpeg",

    "https://images.pexels.com/photos/9518654/pexels-photo-9518654.jpeg",

    "https://images.pexels.com/photos/18924822/pexels-photo-18924822.jpeg"
];

let currentImage = 0;

setInterval(() => {

    currentImage++;

    if (currentImage >= heroImages.length) {
        currentImage = 0;
    }

    hero.style.backgroundImage =
        `linear-gradient(
            rgba(10, 30, 22, 0.65),
            rgba(10, 30, 22, 0.65)
        ),
        url("${heroImages[currentImage]}")`;

}, 4000);