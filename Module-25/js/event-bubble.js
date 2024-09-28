
document.getElementById('item-2').addEventListener('click', function (event) {
    // event.stopPropagation()
    event.stopImmediatePropagation()
    console.log('Item-2 is Clicked')
})
document.getElementById('item-2').addEventListener('click', function (event) {
    // event.stopPropagation()
    console.log('Item-2 second is Clicked')
})
document.getElementById('item-2').addEventListener('click', function (event) {
    // event.stopPropagation()
    console.log('Item-2 thired is Clicked')
})
document.getElementById('item-2').addEventListener('click', function (event) {
    // event.stopPropagation()
    console.log('Item-2 fourth is Clicked')
})

document.getElementById('listContainer').addEventListener('click', function () {
    console.log('Ul is Clicked')
})


document.getElementById('secionContainer').addEventListener('click', function () {
    console.log('section is clicked')
})

document.getElementById('body').addEventListener('click', function () {
    console.log('Body is clicked ')
})