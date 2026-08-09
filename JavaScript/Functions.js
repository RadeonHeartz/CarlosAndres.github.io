//Código reutilizado de la página web "https://codepen.io/luis-developer/pen/QWazOjz"
function createSquare() {
    const section = document.querySelector('.stars');
    const square = document.createElement('span');
    var size = Math.random() * -10;

    square.style.width = 15 + size + 'px';
    square.style.height = 15 + size + 'px';

    square.style.top = Math.random() * innerHeight + 'px';
    square.style.left = Math.random() * innerWidth + 'px';

    section.appendChild(square);

}
setInterval(createSquare, 50);

const menuToggle = document.querySelector(".MenuToggle");
const navLinks = document.querySelector(".NavLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});