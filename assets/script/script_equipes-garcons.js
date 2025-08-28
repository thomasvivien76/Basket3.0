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
    "/assets/images/photos_equipes/Gars/U7&U9_Coach_Tiffany_Emma_Alan_N.JPG", 
    "/assets/images/photos_equipes/Gars/U7&U9_Coach_Tiffany_Emma_Alan_N2.JPG",
    "/assets/images/photos_equipes/Gars/U13G_coach_Franck_N.jpg",
    "/assets/images/photos_equipes/Gars/U13G_coach_Franck_N3.jpg",
    "/assets/images/photos_equipes/Gars/U15G_equipes1&2_N.jpg",
    "/assets/images/photos_equipes/Gars/U15G_equipes1&2_N3.jpg",
    "/assets/images/photos_equipes/Gars/U15G_equipe2_Coach_Julien_F.jpg",
    "/assets/images/photos_equipes/Gars/U15G_equipe2_Coach_Julien_N.jpg",
    "/assets/images/photos_equipes/Gars/U15G_equipe1_coach_Yvon&Max_F.jpg",
    "/assets/images/photos_equipes/Gars/U15G_equipe1_coach_Yvon&Max_N.jpg",
    "/assets/images/photos_equipes/Gars/U18G_equipe1_2_coach_Joe_N.webp",
    "/assets/images/photos_equipes/Gars/U18G_equipe1_2_coach_Joe_F.webp",
    "/assets/images/photos_equipes/Gars/U18G_equipe2_coach_urelien_N.webp",
    "/assets/images/photos_equipes/Gars/U18G_equipe2_coach_Aurelien_F.webp",
    "/assets/images/photos_equipes/Gars/U18G_equipe1_coach_Joe_N.webp",
    "/assets/images/photos_equipes/Gars/U18G_equipe1_coach_Joe_F.webp",
    "/assets/images/photos_equipes/Gars/Seniors_gars_equipes1&2_Coach_Guillaume_F.webp",
    "/assets/images/photos_equipes/Gars/Seniors_gars_equipes1&2_Coach_Guillaume_N.JPG", 
    "/assets/images/photos_equipes/Gars/Seniors_gars_equipe2_Coach_Guillaume_F.JPG",
    "/assets/images/photos_equipes/Gars/Seniors_gars_equipe2_Coach_Guillaume_N.jpg",
    "/assets/images/photos_equipes/Gars/Seniors_gars_equipe1_Coach_Guillaume_F3.jpg",
    "/assets/images/photos_equipes/Gars/Seniors_gars_equipe1_Coach_Guillaume_N2.jpg"
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
