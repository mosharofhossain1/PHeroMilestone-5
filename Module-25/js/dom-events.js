// OPtion : 1 
{/* <button onclick="document.body.style.backgroundColor='yellow'">Make Yellow</button> */ }

// OPtion : 2
function makeRed() {
    document.body.style.backgroundColor = 'red';
}


// option : 3
const makeGreenBtn = document.getElementById('makeGreen');
makeGreenBtn.onclick = makeGreen;
function makeGreen() {
    document.body.style.backgroundColor = 'green';
}

// option : 3 another 
const makePurpleBtn = document.getElementById('makePurple');
makePurpleBtn.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple'
}

// option : 4
const pinkBtn = document.getElementById('makePink');
pinkBtn.addEventListener('click', makePink);

function makePink() {
    document.body.style.backgroundColor = 'pink';
}
// option : 5
const makeblueBtn = document.getElementById('makeBlue');
makeblueBtn.addEventListener('click', function () {
    document.body.style.backgroundColor = 'blue';
})

// OPtion : 6 Final option 
document.getElementById('makeGolden').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod'
})