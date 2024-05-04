const currentYear = new Date().getFullYear();

const footerParagraph = document.getElementById('footer-paragraph');
footerParagraph.textContent = `Created By \xA9Simphiwe ${currentYear}.`;

const backgroundImage = document.getElementById('bg-image-container');

window.addEventListener('scroll', updateImage);

function updateImage() {
  backgroundImage.style.opacity = 1 - window.scrollY / 600;
  backgroundImage.style.backgroundSize = 120 - window.scrollY / 20 + '%';
}
