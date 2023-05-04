const hamburgerElement = document.querySelector(".hamburger") as HTMLDivElement;

const NavElements = document.querySelector(".nav-links") as HTMLDivElement

hamburgerElement.addEventListener('click', () => {
    NavElements.classList.toggle('expanded')
})