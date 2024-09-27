

document.getElementById('postBtn').addEventListener('click', function () {
    // console.log('post btn is active')
    const commentBox = document.getElementById('newComment');
    // console.log(commentBox)
    const commentText = commentBox.value;
    // console.log(commentText)
    const container = document.getElementById('container');
    const createP = document.createElement('p');
    createP.innerText = commentText;

    container.appendChild(createP);
    commentBox.value = '';

})