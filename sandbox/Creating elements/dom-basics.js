//added a Paragraph to the document
const newParagraph = document.createElement("p");

newParagraph.innerText="Added with JavaScript";

document.body.appendChild(newParagraph);

//added an image to the document
const newImage = document.createElement('img');
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "added image")
document.body.appendChild(newImage)

//added new div
const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>"
document.body.appendChild(newDiv)

//added a new Section wirh h2 and p elements
const newSection = document.createElement("section");
const newH2 = document.createElement("h2");
newH2.innerText = "DOM Basics";
newSection.appendChild(newH2);
const newP = document.createElement("p");
newP.innerText = "This was added through JavaScript"
newSection.appendChild(newP);

document.body.appendChild(newSection);

