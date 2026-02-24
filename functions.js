//named function examples
//ex 1

function add(a, b) {
  return a + b;
}
console.log(add(2, 5));

//even or odd number example

function checkEvenOdd(num) {
  // for (i=0; i<num.lenght; i++){

  if (num % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}
console.log(checkEvenOdd(1));
console.log(checkEvenOdd(5));

//example 3  largest number

function FindLargest(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(FindLargest(29,25))

//factioial function ex 4

function Factorial (n){
    let result =1;
    for(i=1; i<=n; i++)
        {
        result=result*i;
    }
    return result;
}
console.log(Factorial(4))

//prime number ex 5

function PrimeNumber(n){
    if(n<=1){
        return false;
    }
    for(let i=2; i<=n; i++){
        if(n%2===0){
            return false;
        }

        return true;
    }
}
console.log(PrimeNumber(2));

//square of num ex 6


function Square(num){
    return num*num;
}
console.log(Square(3))



//function reverse a sting example 7

function ReverseString(str){
    return str.split("").reverse().join(",");

}
console.log(ReverseString("Ranjith"))

//function count vowels

function countVowels(str){
    let count =0;
    let vowels ="aeiou";
    for(let i= 0; i<str.length; i++){
        if(vowels.includes(str[i])){
            count++;
        }
    }
    return count;
}
console.log(countVowels("ranjithkumar"))


function changeText(){
    document.getElementById("demo").innerText ="welcome nithin";
}


