// sketch yay.
const header = document.querySelector(".header");

const inputSize = document.createElement("input");
inputSize.id = "input-size";
inputSize.placeholder = "enter the size : ";
const submitButton = document.createElement("button");
submitButton.textContent = "Submit";

header.appendChild(inputSize);
header.appendChild(submitButton);

// Main container that will contain all the hover divs.
const container = document.createElement("div");
container.classList.add("main-container");
document.body.appendChild(container);

submitButton.addEventListener("click", () => {
    const input = inputSize.value;

    // Child nodes.
    for (let i = 1; i <= input * input; i++) {
    const div = document.createElement("div");
    //div.textContent = i;
    //div.style.padding = "8px";
    div.style.border = "1px solid black";
    //div.style.margin = "1px";
    div.style.width = (500 / input) + "px";
    div.style.height = div.style.width;
    div.style.boxSizing = "border-box";
    //div.style.backgroundColor

    container.appendChild(div);
}});
