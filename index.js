// Write your code here!

//remove an element from the DOM
const main = document.getElementById("main");
main.remove();

//creating element and then assigning its id and textcontent
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "DOM is the champion";

// check the message on the console
// DOM is the champion
console.log(newHeader.textContent);
