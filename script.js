const topselect = document.querySelectorAll(".topselectlist")
topselect.forEach(e => {
    e.addEventListener("click", () => {
        topselect.forEach(li => li.classList.remove("active"))
        e.classList.add("active")
    })
});

const buttons = document.querySelectorAll(".librarylist")
buttons.forEach(e => {
    e.addEventListener("click", () => {
        buttons.forEach(li => li.classList.remove("active"))
        e.classList.add("active")
    })
});

const toggle = document.querySelector(".toggle");
const library = document.querySelector(".library");
const overlay = document.querySelector(".overlay");
const section = document.querySelector(".section");

toggle.addEventListener("click", () => {
    library.classList.toggle("open");
    overlay.classList.toggle("show");
    section.classList.toggle("bg")
});

overlay.addEventListener("click", () => {
    library.classList.remove("open");
    overlay.classList.remove("show");
    section.classList.remove("bg")
});

