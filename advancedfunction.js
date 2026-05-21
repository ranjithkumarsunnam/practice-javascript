//JavaScript NULL && UNDEFINED

//undefined -->javascript is assign the value as undefined 

let name;
console.log(name);

//null -->manually assign the null value

let name1="ranjith";
 name1=null;
console.log(name1)

//simplified version for Functions 
//Arrow Functions
//mostly we can declared the variable using const keyword


//example(1)
const greet =()=>{
    console.log("hello");
}
greet("ranjith");

//example(2) without parameters
const ArrowFunction =()=>{

    console.log("line 69:is Arrow function");
}
ArrowFunction();

//example(3) using parameters

const Arrow =(a,b)=>
{
console.log(`A:${a}  B:${b}`);
}
Arrow(2,3);
Arrow(6,5);

//Normal Function()
function FunctionName(a,b){
    console.log("Hello Ranjith Kumar");
    console.log(`a:${a} b:${b}`);

}
FunctionName(5,5)


//Arrays in JavaScript

let countries=['IND','AUS','ENG','UK','DRM'];
console.log(countries)
//console.log("Array length:"+countrys.length);
countries.push("USA");
console.log(countries);
//countrys.pop()
//countrys.shift() 
/* for (let i=0; i<countrys.length; i++){
    console.log(countrys[i]);
} */




//Objects in JavaScript

//Object is car
const Car={
     name:'BMW',
     model:'X series',
     varity:'petrol',
     start:function(){
    console.log("car is sarted");
     },
     horn:function(){
        console.log("krrrrrrrrrrrr");

     }
    }
console.log(Car.model);
console.log(Car.name);
console.log(Car.varity);
console.log(Car)

//Calling the Function
Car.start();
Car.horn();

