// console.log('js file is added')
// console.log(document);

// Dom Traversing Elements List 
/**
 * 1. getElementsByTagName(); -> Returan HTMLCollection - for of loop kora jai
 * 
 * 2. getElementsByClassName(); -> Returan HTMLCollection - for of loop kora jai 
 * 
 * 3. getElementById(); ->  Direct element deya dey [jodi kuno element na take tahole null return kore] - kuno loop kora jai na 
 * 
 * 4.querySelectorAll() -> NodeList Return kore - for of loop kora jai [forEach Method us ekora jai ]
 * 
 * 5. querySelector() -> NodeList return kore [element er first element select kora hoy] - [for of loop use kora jai na] []

 * * */

// getAttribute();
// setAttribute();
// classList();
// clasList.add()
// classList.remove()

const index = document.getElementsByClassName('important_places')[0];
// console.log(index)
const indexInnerHtml = document.getElementsByClassName('important_places')[0].innerHTML;
// console.log(indexInnerHtml);
const indexInnerText = document.getElementsByClassName('important_places')[0].indexInnerText = 'Hey You Whats up!';
// console.log(indexInnerText);

// css style apply by js 

const sections = document.querySelectorAll('section');
for (const section of sections) {
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '10px';
    section.style.padding = '10px';
    section.style.backgroundColor = 'lightgray'
}

const lastSection = document.getElementById('lastSection');
lastSection.style.backgroundColor = 'yellow';
lastSection.classList.add('font');
lastSection.classList.remove('fontSize')


// Selecting Nodes 
/* **
    * 1. ChildNodes -> getElementById Deya sudu kaj kore []
    * 2. firstChild -> getElementById Deya sudu kaj kore []
    * 3. lastChild -> getElementById Deya sudu kaj kore []
    * 4. nextSibling -> getElementById Deya sudu kaj kore []
    * 5. parentNode -> getElementById Deya sudu kaj kore []
    * 6. parentElement  -> getElementById Deya sudu kaj kore []
    * 7. previousSibling -> getElementById Deya sudu kaj kore []
    * 8. textContent()
    * 9. apendChild()  -> getElementById Deya sudu kaj kore []
    * 10.removeChild()
    * 11. createElement() -> getElementById Deya sudu kaj kore []
** */