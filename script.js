// sketch yay.
const header = document.querySelector(".header");

// Input and Submit 
const gridtext = document.createElement("div")
gridtext.id = "grid-text";
gridtext.textContent = "Grid size : ";

const inputSize = document.createElement("input");
inputSize.id = "input-size";
inputSize.placeholder = " try between 30-100  ";

const submitButton = document.createElement("button");
submitButton.textContent = "Submit";


header.appendChild(gridtext);
header.appendChild(inputSize);
header.appendChild(submitButton);

// Main container that will contain all the hover divs.
const container = document.createElement("div");
container.classList.add("main-container");
document.body.appendChild(container);

function randomColor () {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`
}

submitButton.addEventListener("click", () => {
    const input = parseInt(inputSize.value);

    if (input > 100 ||input === 0 || input === null || isNaN(input) === true ) {
        alert("Invalid entry! : Input should be between ( 1 - 100 )");
    } else {
        container.innerHTML = "";
        submitButton.textContent = "Submit / Reset"

        // Child nodes.
        for (let i = 1; i <= input * input; i++) {
        
        const div = document.createElement("div");
        div.style.border = "1px solid black";
        div.style.width = (500 / input) + "px";
        div.style.height = div.style.width;
        div.style.boxSizing = "border-box";
        div.style.backgroundColor = "white";

        container.appendChild(div);
        // Hover effect
        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = randomColor();
            div.style.opacity = "0.1";
        });

        div.addEventListener("mouseleave", () => {
            div.style.opacity += "0.1";
        })
    }
}});



