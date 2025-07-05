/*menu burger*/
document.getElementById('mobile-menu').addEventListener('click', function() {
    const nav = document.querySelector('nav');
    nav.classList.add('active');
});

document.getElementById('close-menu').addEventListener('click', function() {
    const nav = document.querySelector('nav');
    nav.classList.remove('active');
});

/*diapo*/
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // Cache toutes les diapositives
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Incrémente l'index de la diapositive et revient à la première si nécessaire
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    // Retire la classe "active" de tous les points
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Affiche la diapositive courante et active le point correspondant
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    // Change de diapositive toutes les 3 secondes (3000 millisecondes)
    setTimeout(showSlides, 6000);
}

// Fonctions pour naviguer manuellement
function plusSlides(n) {
    slideIndex += n - 1; // Ajuste l'index pour la fonction showSlides
    showSlides();
}

function currentSlide(n) {
    slideIndex = n - 1; // Ajuste l'index pour la fonction showSlides
    showSlides();
}

