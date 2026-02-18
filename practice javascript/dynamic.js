const updateContentButton = document.getElementById("updateContentBtn");
const dynamicContentDiv = document.getElementById("dynamicContent");

const Button = document.getElementById("button1");
const Update =document.getElementById("update");

updateContentButton.addEventListener("click", () => {
  dynamicContentDiv.innerHTML = "<p> ranjith</p>";
});

Button.addEventListener("click",() =>{
Update.innerHTML = "<p>welcome to my show</p>";

});
