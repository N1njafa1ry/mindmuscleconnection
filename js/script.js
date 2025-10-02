const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

const video = document.querySelector('.hero-video');
if (video) {
    video.play().catch(error => {
        console.log('Autoplay blocked:', error);
    });
}