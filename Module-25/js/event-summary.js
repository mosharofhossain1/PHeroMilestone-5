
// we will use some times 
function handleOnclick() {
    const handlerStatus = document.getElementById('handler_Status');
    handlerStatus.innerText = 'Text Change by Onclick handeler function';
}

// final option 
document.getElementById('eventListener').addEventListener('click', function () {
    const handlerStatus = document.getElementById('handler_Status');
    handlerStatus.innerText = 'Text change by addEvent Listerner function'
});


// final option recap 
document.getElementById('updateBtn').addEventListener('click', function () {
    // console.log('update btn clicked')
    const inputField = document.getElementById('inputField');
    const inputText = inputField.value;
    // console.log(inputText)

    const handlerStatus = document.getElementById('handler_Status');
    handlerStatus.innerText = inputText;
    inputField.value = '';
})