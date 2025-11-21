const input = document.querySelector("input");
const h2 = document.querySelector("h2");

input.addEventListener("keyup", display);
h2.innerHTML = localStorage.getItem("value");

function display() {
    // console.log(11);
    // h2.innerHTML = input.value;
    localStorage.setItem("value", input.value);
    h2.innerHTML = localStorage.getItem("value");
}
