let x = "100";
let y = Number(x);
console.log(y);
console.log(typeof y)

//number to string

let num = 100;
let result =String(num);
console.log(result);
console.log(typeof result)


// .toString()

let num1 = 100;
console.log(num1.toString());
console.log(typeof num1.toString());

//boolean to number 
console.log(Number(true));
console.log(Number(false));

//number to boolean 
console.log(Boolean(1));
console.log(Boolean(0));

//real time example 
let age="22";
let resultage = Number(age)+5;
console.log(resultage);

//Empty String 

let text ="";
console.log(Boolean(text));

let texts ="javaScript";
console.log(Boolean(texts));

//adding typecasting 
let a = "20";
let b ="30";
let resultc = (parseInt(a)+parseInt(b));
console.log(resultc);

//userage 

let userage = "27";
userage =Number(userage);
console.log(userage+2);

//parseFloat
let float = "44.45";
console.log(parseInt(float));
console.log(parseFloat(float));

//Using .toString()
let number = 500;
console.log(number.toString());
console.log(typeof number.toString());

//students marks Average [converting string into number ]
let m1 = "80"
let m2 = "70"
let m3 = "90"
let total = Number(m1)+Number(m2)+Number(m3);
let average = total/3;
console.log(average);

//conver usser age i/p age
let Userage = 21;
if(userage>=18){
    console.log("Elgibile for Vote");
}
else{
    console.log("Not Eligible");
}

//Multiplication of two String Numbers

let A ="6"
let B ="7"
let Result = Number(A) * Number(B);
console.log(Result);


//Empty Input Validation
let USERNAME = "";
if(Boolean(USERNAME)){
    console.log("Valid Input");
}
else{
    console.log("Input is Empty");
}


//conver String into Decimal 
let string = "44.52";
console.log(parseInt(string));
console.log(parseFloat(string));


//Compare String Numbers
let input = "10";;
let input1 = "20";
console.log(Number(input)<Number(input1));
console.log(Number(input)>Number(input1));

//check Even or Odd Numbers Using String

let Even = "24";
even = Number(Even);
if(Even%2==0){
    console.log("Even");
}
else{
    console.log("Odd");
}

//String Concatination

let Firstname = "Ranjith";
let Lastname = "Kumar";
console.log( Firstname + " " + Lastname)
