//Lopps in javascript
//For loop
//while loop

//For Loop

/*  for (let i =0; i<10; i++){
    if(i==5){
        break;
    }
    console.log(i);
 }
  */

//While Loop
 /* let j=0;
while(j<10){
    console.log(j);
    j++
} */


//functions in javascript

function UserName(){
   console.log("Ranjith Kumar");
   
}
UserName();

function AddNumbers(x,y){
    return x+y;
}

let add = AddNumbers(2,5);
console.log(add);
let a2 = AddNumbers(3,5);
console.log(a2);
let a3 = AddNumbers(9,5);
console.log(a3);


let a=20;
let b ="10";
let c =Number(b);
let d =a+c;


// console.log(typeof c);
// console.log(c);
// console.log(typeof a +c);
console.log(d)
console.log(typeof d);

let s =500;
let s1 =String(s);
console.log(s1);
console.log(typeof s1);

let s2 =6300;
let s3= s2.toString() ;
console.log(s3);
console.log(typeof s3);

let k =19;
if(k%2==0){
    console.log("even")
}
else{
    console.log("Odd Number");
}

//single line declaration of if statement

k%2==0?console.log("number is even"):console.log("Number is Odd");


//Break Statement 


for (let i =0; i<10; i++){
    if(i==5){
        break;
    }
    console.log(i);
    // console.log(i[2]);  it will shows the o/p as undefined

    // console.log()
}
console.log("Loop is breaked");


//Break statement in While Loop

let j=0;
while(j<20){
    console.log(j)
    if(j==6){
        break;
    }
    j++
}
//Mostly Break Statement is used in Loops concepts
while(j<10){
    console.log(`value os J:${j}`)
    //console.log("Value of J:" +j);
    j++;
}

//JS Scops 
//block Scope
//function Scope
//Global Scope

for(let i=0;i<10; i++){
    console.log(`value of I :${i}`);
   //console.log(`Value Of A :${a}`);
    let a=20;
    if(j==3)
{
    break;
}    
}
//Block LEvel Scope
{
    let city= "hyderabad";
console.log(city);

}
//outside the block referance error
//console.log(city);

//Global Scopes  --> variables are accessed from any globally in the code 
let l=0;
while(l<5){
    console.log(`value of L:${l}`);
    console.log(`value of K:${k}`);
    l++
}
//console.log(`value of K:${k}`);


//Function Scope

function Number(){
    let age =21;
    console.log(`values of Age is:${age}`);
}
Number();
//referance Error console.log(age)


//Return Statement in Functions
function Add(a,b){
    let sum =a+b;
    console.log(sum)
    return a+b;
}
Add(2,8);
//console.log(sum)


//Return Statement
function mul(a,b){
    let m=a*b;
    console.log(m)
    return m;

}
mul(2,2);

//Ways to prints the values
function multiply(x,y){
    return x*y;
}
console.log(multiply(2,9));

//Addition

function addition(x,y){
    return x+y;
}
let result =addition(3,12);
console.log(result);


//function  Division
function division(a,b){
    return a/b;
}
let div =division(2,8);
console.log(div);
//let div =division(2/8);
//console.log(div);
//console.log(typeof div); //number










