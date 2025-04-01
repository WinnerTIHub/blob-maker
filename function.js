const element = document.querySelector(".blob");
const outputCode = document.getElementById("css-code");

const sliders = document.querySelectorAll(".sliders input[type='range']");

const dimensions = document.querySelectorAll(".dimensions input[type='number']");

sliders.forEach( slider => {
    slider.addEventListener("input", createBlob);
})

dimensions.forEach(dimension => {
    dimension.addEventListener("change", createBlob);
})

function createBlob () {
    const sliderOne = sliders[0].value;
    const sliderTwo = sliders[1].value;
    const sliderThree = sliders[2].value;
    const sliderFour = sliders[3].value;

    const height = dimensions[0].value;
    const width = dimensions[1].value;

    const borderRadius = `${sliderOne}% ${100 - sliderOne}% ${100 - sliderTwo}% ${sliderTwo}% / ${sliderFour}% ${100 - sliderThree}% ${sliderThree}% ${100 - sliderFour}%`;

    element.style.cssText = `border-radius: ${borderRadius};
    height: ${height}px;
    width: ${width}px;`;
    element.style.transition = `border-radius 0.1s ease-in-out`;

     outputCode.value = element.style.cssText;
}

document.getElementById("copy").addEventListener("click", () => {
    navigator.clipboard.writeText(outputCode.value).then( () => {
        alert("copied to clipboard");
    });
});

createBlob();

const footer = document.createElement("div");
footer.textContent = "© 2025 WinnerTI Hub, made by WinnerTIHub";
footer.classList.add("footer");
document.body.appendChild(footer);

