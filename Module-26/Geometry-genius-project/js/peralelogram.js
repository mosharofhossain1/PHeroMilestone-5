function calculatePeralelogram() {
    const peralelogramBaseInput = document.getElementById('peralelogramBase');
    const peralelogramBaseValue = peralelogramBaseInput.value;
    const base = parseFloat(peralelogramBaseValue);
    // console.log(base);

    // perlelogram height value 

    const peralelogramHeightInput = document.getElementById('peralelogramHeight');
    const peralelogramHeightValue = peralelogramHeightInput.value;
    const height = parseFloat(peralelogramHeightValue);
    // console.log(height);

    // calculate peralelogram area value 
    const area = base * height;
    // display peralelogram 
    const peralelogramArea = document.getElementById('peralelogramArea');
    peralelogramArea.innerText = area;
}

