console.log("hello");
const first = 1;
const second = 2;
console.log(first);
const str = "minato";
console.log(str);
const fruits = ["apple", "orange", "mango"];
console.log(fruits[1]);
fruits[1] = "banana";
console.log(fruits[1]);
const arr = [1, "minato", false, 2.3];
console.log(arr);
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
const fourth = document.getElementById("ptag");
if (fourth) {
    fourth.innerHTML = "this is GOAT";
}
function newfunction() {
    console.log("i am writing");
}
const input = document.getElementById("eventListener");
const output = document.getElementById("Ptag");
    input.addEventListener("input", () => {
        output.textContent = input.value;
    });
const newvar = document.createElement("h1");
newvar.textContent = "this is new";

document.body.appendChild(newvar);

setTimeout(() => {
    newvar.remove();
}, 3000);