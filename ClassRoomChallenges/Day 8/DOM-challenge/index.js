/* 
BRONZE - 
Connect your js file to your html file.

In your html file, create an h1 element with an id of "title".

In your js file, grab your h1 element by its id. 

In your js file, use a property to add text to your h1 element
that says, "This is my Todo List:".

Still in your js file, use a property to style your h1 element and
make it the hex color: "#A9A9A9".
*/

let title = document.querySelector('#title');

function addTitle() {
    title.innerText = `This is my Todo List`;
    title.style.color = "#A9A9A9"
};

addTitle();

/* 
SILVER - 
In your html file, create a div element underneath your h1 element
with an id of "div".

In your js file, grab your div element by its id. Still in your js
file, create a new paragraph element. Inside the paragraph element
put in a dummy text (Lorem ipsum). Change the color of the paragraph

text to: "#6495ED". Nest the paragraph element inside the div
element.


let paragraph = document.querySelector('#div');
let para = document.createElement('p');
let newText = "lorem ipsum livse yous nd itnid sonti loaut slfn utwil elius lxidj";

function addParagraph() {
    para.appendChild(newText);
    paragraph.appendChild(para);
    paragraph.style.color="#6495ED";
}

addParagraph(); */

/* 
GOLD - 
In your html file underneath your div element, create an unorganized list element with an id of "list".

In your js file, grab your ul element by its id. 

Create an array in your js file with 4 different items for your to-do list. 

Now use a method to go over all the array items. For each item, 
create an li element and put the value of that item into your li element. Append the li element to the ul element of "list".
*/

let list = document.querySelector('#list');
let newList = ['Order Groceries', 'change oil', 'tie die shirt', 'call your mother'];

newList.forEach((item) => {
    let li = document.createElement('li');
    li.innerText = item;
    list.append(li);
})

