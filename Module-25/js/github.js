// console.log('github connected')

document.getElementById('inputDetail').addEventListener('keyup', function (event) {
    // console.log(event.target.value)
    const text = event.target.value;
    const deletBtn = document.getElementById('deleteBtn');
    if (text === 'Delete') {
        deletBtn.removeAttribute('disabled');
    }
    else {
        deletBtn.setAttribute('disabled', true)
    }
})

document.getElementById('deleteBtn').addEventListener('click', function () {
    // console.log('btn is clicked')
    const removeText = document.getElementById('removeText');
    removeText.style.display = 'none';
})