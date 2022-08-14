const dec = document.querySelector(".dec")
const decc = document.querySelector(".dec");
const inc = document.querySelector(".inc");
const h1 = document.querySelector(".counterh");
const ref = document.querySelector(".ref");

let i = 0;


decc.addEventListener("click", () => {

    h1.innerHTML = `Counter: ${i}`
    i++
})
inc.addEventListener("click", () => {

    h1.innerHTML = `Counter: ${i}`
    i--
})
ref.addEventListener("click", () => {

    h1.innerHTML = `Counter: ${i = 0}`
})