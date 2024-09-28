// console.log('file is connedcted');

// Mouse Events
document.getElementById('mouseClick').addEventListener('click', function () {
    console.log('Clicked BY Mouse')
})

document.getElementById('mouseClick').addEventListener('mouseenter', function () {
    console.log('Mouse is entered by mouse')
})

document.getElementById('mouseClick').addEventListener('mousemove', function () {
    console.log('Mouse is moved')
})

document.getElementById('mouseClick').addEventListener('mousedown', function () {
    console.log('Mouse is down')
})

document.getElementById('inputField').addEventListener('focus', function () {
    console.log('input is focues')
})

document.getElementById('inputField').addEventListener('blur', function () {
    console.log('Input is blur')
});

// keyboard events
document.getElementById('inputField').addEventListener('keydown', function (event) {
    console.log(event.target.value);
});

document.getElementById('inputField').addEventListener('keypress', function (event) {
    console.log(event.target.value)
})

document.getElementById('inputField').addEventListener('keyup', function (event) {
    console.log(event.target.value);
})





