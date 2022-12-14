const categories = document.querySelectorAll('.item');
console.log('Number of categories:', categories.length);

// console.log('Category:', categories[0].firstElementChild.textContent);
// console.log('Elements:', categories[0].lastElementChild.children.length);
// console.log('Category:', categories[1].firstElementChild.textContent);
// console.log('Elements:', categories[1].lastElementChild.children.length);
// console.log('Category:', categories[2].firstElementChild.textContent);
// console.log('Elements:', categories[2].lastElementChild.children.length);



categories.forEach(function (item, index) {
const title = item.firstElementChild.textContent;
const elements = item.lastElementChild.children.length;
    console.log('Category:', title);
    console.log('Elements:', elements);
})
 
// for (let item of categories) { 
// const title = item.firstElementChild.textContent;
// const elements = item.lastElementChild.children.length;
//     console.log('Category:', title);
//     console.log('Elements:', elements);
// }
