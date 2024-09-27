const placeList = document.getElementById('parentList');
const li = document.createElement('li');
li.innerText = 'New item add by js';

placeList.append(li);

// class selector use kore kuno element create and append kora jai na [error debe isNot a function ]

// id selecor use kore element create kora jai and append kora jai [Sundor babe kaj korbe ]

// new section create by js 
const mainContainer = document.getElementById('mainContainer');
// console.log(mainContainer)
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'Burhani Kamu';

const li2 = document.createElement('li');
li2.innerText = 'Salat kamu';

section.append(h1);
section.append(ul);
ul.append(li1);
ul.append(li2);
mainContainer.append(section);

// set innerHTML Directly 
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
    <h1>My Dress Section</h1>
    <ul>
        <li>T-shirt</li>
        <li>T-shirt</li>
        <li>T-shirt</li>
        <li>T-shirt</li>
    </ul>
`
mainContainer.appendChild(sectionDress);
