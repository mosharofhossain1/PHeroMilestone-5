// Rectangle calculation function 

/* *
*
* Objective : get base, height of a traingle . calculate 
*
* */
function calculateTriangleArea() {
    // triangle base value 
    const triangleBaseInput = document.getElementById('triangleBase');
    const triangleBaseValue = triangleBaseInput.value;
    const base = parseFloat(triangleBaseValue);
    console.log(base)

    // triangle heigh value
    const triangleHeightInput = document.getElementById('triangleHeight');
    const triangleHeightValue = triangleHeightInput.value;
    const height = parseFloat(triangleHeightValue);
    console.log(height)

    // calculate triangle area 
    const area = 0.5 * base * height;
    console.log(area)
    // display triangle area 
    const triangleArea = document.getElementById('triangleArea');
    triangleArea.innerText = area;
}