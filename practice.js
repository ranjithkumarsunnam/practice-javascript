const AddNumbers=(a,b)=>
{

return sum =a+b;
//console.log(sum)
}
 console.log(AddNumbers(10,20));



 //square of numnbers

 function SquareNUmbers(num){
    console.log(num*num)
    
 }
  SquareNUmbers(2);


  const square=(num)=>{
    return num*num;

  }
  console.log(square(5));




  let num=[10,2,2,3,6,5,4,7,89,5];
  for(let i=0; i<num.length; i++){
 
}
console.log(num.join());




    let name="ranjith";
    let age=20;
    let job="developer";
    console.log(`My Nmae is ${name} Current Age is${age} I am working as an ${job}`);


    function Addition(num1, num2){
        let value=num1+num2;
        console.log(value);
    }
    Addition(50,50);




   let a=6;
   if(a%2==0){
    console.log(a,"is a Even Number");
   }
   else{
    console.log(a,`is Odd Number`)
   }


   let num1=10;
   let Sq =num1*num1;
   console.log(Sq);



   let SquaresNum =[1,2,3,4,5,6];
   for(let i=0; i<SquaresNum.length; i++){
    console.log(`${SquaresNum[i]*SquaresNum[i]}`);
    }






let Fruites=['sduhvb','sdigfid','siduhfi','shudfuouo'];
// for(let i=0; i<Fruites.length; i++){
//     //return Fruiites
// }

// console.log(Fruites.join());
console.log(Fruites)

const GreatestNum=(a,b,c)=>{
    if(a>b && a>c){
        return `A Number is Greatest`;

    }
    else if(b>a && b>c){
        return `B is Greatest`;
    }
    else{
        return `C is Greatest`;
    }
}
console.log(GreatestNum(10,100,800));



let i=0;
while(i<10){
    if(i==5){
        console.log(`I is Equal to ${i}`);
    }
    i++;
}


let messages =['hi', "whatsup",'chatting'];
console.log(messages);

let numbers =[1,2,3,5,6,4,8];
{
    let ii=100;
   console.log(ii);
    console.log(numbers)
}


//global Scope 
let company="open Ai";

function Messages(){
    console.log(company);
    return "WelCome"
}
console.log(Messages());
console.log(company);



function Movies(Movie1,movie2,movie3){
    console.log(Movie1,movie2,movie3);
}
Movies("ranjith","rakesh","moviesRulzes");



function textValues(values){
    // let values =[1,2,3,4,65,6];
    return values;
}
console.log(textValues([1,2,3,4,5,6,9,7,9]));
  


const shopping =(...sum)=>{
    return sum;}
console.log(shopping(1,2,3,4,6,6,8,98))

