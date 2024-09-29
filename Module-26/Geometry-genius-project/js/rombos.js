
function calculateRombos() {
    const rombosD1 = getInputValueById('rombosD1');
    const rombosD2 = getInputValueById('rombosD1');

    const area = 0.5 * rombosD1 * rombosD2;
    setInnerText('rombosArea', area)
}

function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

function setInnerText(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}