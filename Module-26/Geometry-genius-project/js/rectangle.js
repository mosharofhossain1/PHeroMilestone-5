function calculateRectangleArea() {
    // rectangle width value
    const rectangleWidthInput = document.getElementById('rectangleWidth');
    const rectangleWidthValue = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthValue);
    // console.log(width);

    // rectangle length value
    const rectangleHeightInput = document.getElementById('rectangleHeight');
    const rectangleHeightValue = rectangleHeightInput.value;
    const length = parseFloat(rectangleHeightValue);
    // console.log(height)

    // calculate rectangleArea valeu 
    const area = width * length;
    // display rectangle area 
    const rectangleArea = document.getElementById('rectangleArea');
    rectangleArea.innerText = area;
}