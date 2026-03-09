//Element Selector

//1.document.getElementById() --> ELEMENT
//2.document.getElementByClassName()--> HTML Collection
//3.document.getElementByTagName() -->HTML Collection
//4.document.querySelector() --> HTML ELEMENT
//5.document.querySelectorAll() -->NODELIST

const myHeading =document.getElementById("my-heading");
myHeading.style.backgroundColor="yellow";
myHeading.style.textAlign="center";
console.log(myHeading);

//classname
const fruits =document.getElementsByClassName("fruits");
fruits[0].style.backgroundColor="lightblue"; //--only 1 element
//for total class items
for(let fruit of fruits){
    fruit.style.backgroundColor="lightblue";
}

//array items
Array.from(fruits).forEach(fruit=>{
    fruit.style.backgroundColor="yellow";

})
console.log(fruits);

const H4heading =document.getElementsByTagName("h4");
const liElement =document.getElementsByTagName("li");

H4heading[0].style.backgroundColor="green";
H4heading[1].style.backgroundColor="green";

for(let h4heading of H4heading){
    h4heading.style.backgroundColor="lightblue";
}

for(let list of liElement){
    list.style.backgroundColor="lightgreen";
}

Array.from(liElement).forEach(litem=>{
    litem.style.backgroundColor="blue";
})

Array.from(H4heading).forEach(h4heading=>{
    h4heading.style.backgroundColor="lightgreen";
})


//
const element =document.querySelector("h4");
element.style.backgroundColor="grey";


//
const fruit =document.querySelectorAll("h4");

fruit[0].style.backgroundColor="red";

//
fruit.forEach(item=>{
    item.style.backgroundColor="grey";
})




