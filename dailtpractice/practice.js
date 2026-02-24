// Get the elements from the DOMb methods used to target the elements by their id and assign them to variables
//(document object model)
// 1.document .getElementById() //ELEMENT OR NULL
// 2.document.getElementsByClassName() //HTML COLLECTION
// 3.document.getElementsByTagName() //HTML COLLECTION
// 4.document.querySelector() //FIRST MATCH
// 5.document.querySelectorAll() //NODE LIST

//using id of html
const myBox = document.getElementById("myBox");
const mybtn = document.getElementById("myBtn");

//mouse click event
mybtn.addEventListener("click",event =>{
    myBox.style.backgroundColor="blue";
    myBox.textContent ="OUCH!";
});

//mouseover event
mybtn.addEventListener("mouseover",event =>{
    myBox.style.backgroundColor="yellow";
    myBox.textContent="Dont do it";

});

//mouseout event
mybtn.addEventListener("mouseout",event =>{
    myBox.style.backgroundColor ="green";
    myBox.textContent ="thankYou";

});


//changing the bg color for headdings and list items usin diff methods->ex: for,array
//tagname in html
const h4Elements =document.getElementsByTagName("h4");
const lielements =document.getElementsByTagName("li");

for (let h4element of h4Elements){
    h4element.style.backgroundColor="yellow";
}
for (let lielement of lielements){
    lielement.style.backgroundColor="lightgreen";
}

Array.from(h4Elements).forEach(h4element =>{
h4element.style.background="yellow";
})
Array.from(lielements).forEach(lielement =>{
    lielement.style.backgroundColor="lightgreen";
})


//query selector in html
const elements=document.querySelector("h4");
elements.style.backgroundColor ="yellow";

const Fruites = document.querySelector("li");
Fruites.forEach(fruite => {
    fruite.style.backgroundColor="tomato";
});


//query selector for all
const foods =document.querySelectorAll("#foods");
foods.forEach(food =>{
    food.style.backgroundColor="lightblue";
});

const nonRootFood =document.querySelectorAll("#nonRootFood");
nonRootFood.forEach(food =>{
food.style.backgroundColor="blue";
})