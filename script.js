document.getElementById('mobile-menu').addEventListener('click', function() {
    const nav = document.querySelector('nav');
    nav.classList.add('active');
});

document.getElementById('close-menu').addEventListener('click', function() {
    const nav = document.querySelector('nav');
    nav.classList.remove('active');
});

