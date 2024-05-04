const currentYear = new Date().getFullYear();

const footerParagraph = document.getElementById('footer-paragraph');
footerParagraph.textContent = `Created By \xA9Simphiwe ${currentYear}.`;

const yPositionCounter = document.getElementById('y-position-counter');
const xPositionCounter = document.getElementById('x-position-counter');

window.addEventListener('mousemove', (e) => {
  yPositionCounter.textContent = e.offsetY;
  xPositionCounter.textContent = e.offsetX;
});
