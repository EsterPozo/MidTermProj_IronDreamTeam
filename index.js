const button = document.querySelector("#burger");
const menu = document.querySelector("#overlay");

button.addEventListener("click", () => {
    button.classList.toggle('burger-active');
    menu.classList.toggle('overlay-active');
});