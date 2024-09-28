// Item Remove by js event 

/* const listItems = document.getElementsByClassName('item');
for (const item of listItems) {
    item.addEventListener('click', function (event) {
        // console.log(event.target.parentNode)
        event.target.parentNode.removeChild(event.target)
    })
} */

document.getElementById('itemList').addEventListener('click', function (event) {
    event.target.parentNode.removeChild(event.target)
})

document.getElementById('addNewBtn').addEventListener('click', function () {
    const itemList = document.getElementById('itemList');

    const li = document.createElement('li');
    li.innerText = 'New Item added';

    itemList.appendChild(li);
})