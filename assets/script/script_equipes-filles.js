/*menu burger*/

document.getElementById('mobile-menu').addEventListener('click', function() {
    const nav = document.querySelector('nav');
    nav.classList.add('active');
});

document.getElementById('close-menu').addEventListener('click', function() {
    const nav = document.querySelector('nav');
    nav.classList.remove('active');
});

//CAROUSSEL
// Liste des images du carrousel
const images = [
    "/assets/images/photos_equipes/Filles/U11F_coach_Emma.webp",
    "/assets/images/photos_equipes/Filles/U13F_coach_Berenice&Remy.jpg",
    "/assets/images/photos_equipes/Filles/U15F_coach_Cecile&Micka_F2.webp",
    "/assets/images/photos_equipes/Filles/U15F_coach_Cecile&Micka_N1.webp",
    "/assets/images/photos_equipes/Filles/U18F_coach_Tiffany&guillaume_N.webp",
"/assets/images/photos_equipes/Filles/U18F_coach_Tiffany&guillaume_F2.JPG"
];

let currentIndex = 0;

// Ouvre le carrousel à l'index spécifié
function openCarousel(index) {
    currentIndex = index;
    document.getElementById("carousel-img").src = images[currentIndex];
    document.getElementById("carousel").style.display = "flex";
}

// Ferme le carrousel
function closeCarousel() {
    document.getElementById("carousel").style.display = "none";
}

// Change l'image affichée dans le carrousel
function changeImage(n) {
    currentIndex += n;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    document.getElementById("carousel-img").src = images[currentIndex];
}
