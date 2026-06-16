//block level 
//function level 
//global level

//let a=20;
// {
//  name="ranjith";
//  console.log(name);

// }
// console.log(name);

//executes b and a
let a= 10;
{
    let b=20;
    console.log(b);
}
console.log(a);

//reference Error Example with in the curly braces {......}

{
    let name="ranjith";
    console.log(name); //execute
}
//console.log(name); //error

//Same variable Name In Block Level Scope
//It Will execte first inside the {....} then outside the console   
let city="hyderabad";
{
    let city="telangana";
    console.log(city);
}
console.log(city);


//Block Scope With If Condition

let age=28;
if(age>=18){
    let message="Eligible to Vote";
    console.log(message);
}


//Block Scope with If(Error)
if(true){
    let marks=90;
    

}
//console.log(marks); //outside error 

//block Scope using ForLoop
for(let i=1; i<=3; i++){
    console.log(i);
}
//console.log(i); //reference Error

//let key AND var Key

if(true){
    let x=20;
    var y=60;
    
}
console.log(y);
   // console.log(x); error--> let keyword is only inside the block 
   //var key--->inside and outside the block no error
   //const also accesses variables inside curly braces {.....}


//Real Time Example

let loggedIn=true;
if(loggedIn){
    let username="ranjith";
    console.log("welcome:"+username);
}
 //practice 

 let code="Javascript";
 {
    let code="React";

    console.log(code); //first inside the block then after the block
 }
 console.log(code);








 //GLOBAL LEVEL SCOPE
 //access the any where in the program

 let name="ranjith";
 console.log(name)

 //global variable inside the block

 let citys="hyderabad";
 {
    console.log(citys);
 }

 //global var inside the function

 let n="sravan";
 function add(){
    console.log(n)
 }

 add();


 //multiple function in global variable

 let fruit="apple"; //global variable in the function 

 function greet(){
    console.log("My Favorite is:",fruit);
 }
 function bye(){
    console.log("Not good it is:",fruit);
 }
 greet();
 bye();


 //function + Global

 let vote=21;
 function showage(){
    console.log(vote);

 }
 showage();
 console.log(vote);

//real Time Example

let websiteName="Amazon";
function displaywebSite(){
    console.log("Welcome to:"+websiteName);
}

displaywebSite()

//Example 2

let cartItems=5;
function showCart(){
    console.log("Items in Cart:",cartItems);
}
showCart();







//FUNCTIONS SCOPE
//variable inside the function and executed inside only not outside function

function good(){
    let god="hanuman";
    console.log(god);
}
//calling function
good();


//Error Example 

function showAge(){
    let Age=20;

}
showAge()
//console.log(Age); //ref error


//Two functions 

function first(){
    let fi=10;
    console.log(fi);
}
function second(){

    let sec=20;
    console.log(sec)

}
first();
second();


//Function inside Function 

function outer(){
    let n="ranjith";

    function inner(){
        console.log(n);
    }
    inner()
}
outer();

//realTime Example

function login(){
    let username="ranjith";
    console.log("Welcome:",username);
}

login();


//Function parameter

function parameter(par){
    console.log("hello:",par);
}
parameter("ranjith");

//globsl + function

let male="ranjith";
function Gender(){
    let female="sandya";
    console.log(male);
    console.log(female);

}
Gender();

let num=10;
function test(){
    let nums=20;
    console.log(num)
    console.log(nums);
}
test();
 console.log(num)
    console.log(nums);
