/* //Normal function
function SayHello(name){
    console.log("Hello "+name);
}
SayHello("Ranjith Kumar");


//Arrow Function
const greet=(name)=>{
    console.log("Greetings "+name);

}
greet("Ranjith Kumar");


let personOne ={
    name:'Ranjith Kumar',
    age:'28'
}
console.log(personOne.name); */


//JSON normal object format
let object1={
    name:'X',
    age:'20',
    DOB:'5/10/1995'
}
console.log(typeof object1);

// conver from normal object to JSON STRING FORMAT 
let stringifiedObject =JSON.stringify(object1);
console.log(typeof stringifiedObject);


//Again convert from JSON string to normal object format
let parseObject=JSON.parse(stringifiedObject);
console.log(typeof parseObject);