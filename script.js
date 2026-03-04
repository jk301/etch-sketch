// Etch-sketch yay.


const header = document.querySelector(".header");

// Grid text
const gridtext = document.createElement("div")
gridtext.id = "grid-text";
gridtext.textContent = "Grid size : ";
gridtext.style.flexShrink = "0";

//Input box
const inputSize = document.createElement("input");
inputSize.id = "input-size";
inputSize.value = 20;
inputSize.placeholder = " try between 30-100  ";

//Submit Button
const submitButton = document.createElement("button");
submitButton.textContent = "Submit";

// Radio selection
const radioWrap = document.createElement("div");
radioWrap.id = "radio-wrap";

const modes = [
  { value: "color", text: "Color" },
  { value: "progressive", text: "Progressive Black" }
];

modes.forEach(mode => {
  const label = document.createElement("label");
  label.style.display = "flex";
  label.style.alignItems = "center";
  label.style.gap = "5px";

  const radio = document.createElement("input");
  radio.type = "radio";
  radio.name = "mode";
  radio.value = mode.value;

  label.appendChild(radio);
  label.append(mode.text);
  
  radio.checked = mode.value === "color";

  radioWrap.appendChild(label);
});

// appending all the nodes.
header.appendChild(gridtext);
header.appendChild(inputSize);
header.appendChild(submitButton);
header.appendChild(radioWrap);

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

        // Child divs.
        for (let i = 1; i <= input * input; i++) {
        
        const div = document.createElement("div");
        div.style.border = "1px solid black";
        div.style.width = (500 / input) + "px";
        div.style.height = div.style.width;
        div.style.boxSizing = "border-box";
        div.style.backgroundColor = "white";
        //div.style.opacity = "1"

        container.appendChild(div);

        // Hover effect
        div.addEventListener("mouseenter", () => {
            const selectedRadio = document.querySelector("input[name='mode']:checked");

            if (selectedRadio.value === "color") {
                div.style.backgroundColor = randomColor();
                div.style.opacity = "1";
            }
            
            // needed some extra help with these.
            if (selectedRadio.value === "progressive") {
                div.style.backgroundColor = "black";

                let currentOpacity = parseFloat(div.style.opacity) || 0;
                currentOpacity += 0.2;
                if (currentOpacity > 1) currentOpacity = 1;
                div.style.opacity = currentOpacity;

            }
        });
    }
}});


