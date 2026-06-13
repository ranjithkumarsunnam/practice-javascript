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


