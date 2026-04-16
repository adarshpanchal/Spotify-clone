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


