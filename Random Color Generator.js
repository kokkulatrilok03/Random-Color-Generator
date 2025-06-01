let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];
let bgContainerElement = document.getElementById("bgContainer");
let buttonElement = document.getElementById("button");

function onChangeBgColor() {
    let numberOfBgColors = bgColorsArray.length;
    let randomBgColorIndex = Math.ceil(Math.random() * bgColorsArray.length);

    let randomBgColor = bgColorsArray[randomBgColorIndex];
    console.log(randomBgColor);
    bgContainerElement.style.backgroundColor = randomBgColor;
}