
//Normal Functions 
function addNumbers(num1,num2){
    return num1+num2;
}
console.log(`Addition of Two Numbers:`,addNumbers(30,20));


//Arrow Functions

const ArrowFunction =(a,b)=>{
  // return a+b;


    console.log(`sum of A:${a}  sum of B:${b}`)
  
    console.log(`Line is 15 Called as Arrow Function`);
  return a+b;

}
console.log(`Sum of Two Numbers is:`,ArrowFunction(10,15));

//Arrow Function one Parameter

const greet=name=>{
    console.log(`Hello My Boy->`,name)
}
greet("Ranjith");


//Arrow Function Returing a value

const add=(c,d)=>c+d;
console.log(add(1,2));

//No Parameter Example Date

const showTime=()=>{
    console.log( new Date().toLocaleTimeString());
}
showTime()

//Time With Name using const key word

const Time=(name)=>{

    console.log(name + new Date().toLocaleTimeString());
    //Time("Ranjith");

};
Time("Ranjith");

function time(Time){
    console.log(Time,new Date().toLocaleTimeString());

}

time("ranjith");