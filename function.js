console.log("ranjith");


//calculator total price

function calculatorTotal(price,quality){
    return price*quality;

}
console.log(calculatorTotal(100,3)); //300


//checkEven Or Odd

function isEven(num){
    return num%2==0;
}
console.log(isEven(3));
console.log(isEven(4));


//greeting function
function greetuser(name){
    return `Hello ${name} Welcome`;
}
console.log(greetuser("ranjith"));


function LargestNum(a,b){
    if(a>b){
        return a;
    }
    return b;
}
console.log("largestNumber:"+ LargestNum(8,9))


//return nothing (undefined)

/* function name(name){
    return ; //undefined not assigning anything to return
}
console.log(name("ranjith"));
 */
//Shopping Cart Counter

function addCart(currentCount){
    return currentCount+1;

}
let cart=0;

cart=addCart(cart);
cart=addCart(cart);

console.log(cart);

//console.log(addCart(5));


//Check Login

function checkLogin(username,password){
    return username ==="admin" && password==="1234";
}
console.log(checkLogin("admin" ,"1234"));
console.log(`Login SuccessFull: ${checkLogin("admin","1234")}`);


//Character Counter

function countCharacter(text){
    return text.length;

}
console.log( typeof countCharacter("ranjith Kumar"));


//FindSquare Numbers

function findSquare(){
    for(let i=0; i<10; i++){
        console.log(i*i);
    }
}
findSquare();

//find Cube Number
function CubeNum(num){
    return num*num*num;

}
console.log("Cube Number is:",CubeNum(3));

function cubesofNumbers(){
    for(let i=0; i<5; i++){
        console.log("Cube Numbers",i*i*i)
    }
}
cubesofNumbers();

function isPostive(num){
   return num>0
}
console.log(isPostive(20));
console.log(isPostive(-20));

//Addition of Two numbers
function Add(a,b){
    return a+b;
}
console.log("Sum of two numbers:",Add(2,8));


//from array find the sum of all numbers
function sumOfArray(array){
    let sum=0;
    for(let i=0; i<array.length; i++){
        sum+=array[i];
    }
    return sum;
}
console.log("sum Of Array:",sumOfArray([1,2,3,4,5]))

//Finding the largest number from array

function LargestNumArray(array){
    let largest=array[0];//Assuming the largest number is it

    for(let i=1; i<array.length; i++){
        if(array[i]>largest){
            largest=array[i];

        }
    }

    return largest;
}
console.log("largest number:",LargestNumArray([5,6,6,78,894,5]));















