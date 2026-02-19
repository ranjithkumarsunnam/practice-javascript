/*const updateContentButton = document.getElementById("updateContentBtn");
const dynamicContentDiv = document.getElementById("dynamicContent");

const Button = document.getElementById("button1");
const Update =document.getElementById("update");*/

const ElementsContainer = document.getElementById("elementsContainer"); //new
const CreateElementBtn = document.getElementById("createElementBtn"); //new
const DeleteFirstElementBtn = document.getElementById("deleteFirstElementBtn");

/*updateContentButton.addEventListener("click", () => {
  dynamicContentDiv.innerHTML = "<p> ranjith</p>";
});

Button.addEventListener("click",() =>{
Update.innerHTML = "<p>welcome to my show</p>";

});

*/
let elementCount = 0;
CreateElementBtn.addEventListener("click", () => {
  elementCount++;
  const newpPragraph = document.createElement("p");

  const newParagraph = document.createElement("p");
  newParagraph.textContent = "Dynamically created element elementCount";
  ElementsContainer.appendChild(newParagraph);
});

DeleteFirstElementBtn.addEventListener("click", () => {
  if (ElementsContainer.children.length > 0) {
    ElementsContainer.removeChild(ElementsContainer.children[0]);
  }
});
