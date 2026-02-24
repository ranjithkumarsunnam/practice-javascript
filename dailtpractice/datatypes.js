//primitive datatypes
//1.numbers
//2.strings
//3.Boolean


let a1 =10;
var b =20;
const c =30;

//number
console.log(typeof(a))
console.log(b)
console.log(c)

//string
var y ="ranjith";
console.log(typeof(y))  //typeof-->shows which type of datatype it is


//boolean
var b =true;
console.log(b)
console.log(typeof(b))

//special datatypes
//1.undefined 
//2.Null

//var d;
//console/log(d)  //not undefined->d

//compisite datatypes
//1.Array
//2.objects


//Arrays
var names =['ranjith','ram','raki'];
console.log(names)

let names1 =['ranjith','ramu','roko'];
console.log(typeof(names1))

//Objects
//key,value pairs

var employe ={
    name:'ranjith',
    rollno:20,
    role:'manage'
}
console.log(employe)

//combination of array & Objects

const students =[{name:'ranjith',roll:20},
{ name:'sunny',roll:10},
{ name:'adhi',roll:12}];

//for loop
for (let i=0; i<students.length; i++){
    console.log(students[i].name)
    console.log(students[i].roll)
}
students.forEach(name=>{
    console.log(name)
});

//template literals

var a =10;
var b =20;
//with template literals
console.log(`sum of a and b is ${a+b}`);

 let name ='java';
 console.log(`hello ${name} world`);

 console.log("hello \nworld");