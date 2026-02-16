// if-else condition

 let a =50;
 let b =60;

 if(a>b){
    console.log("  A is greater than B");
 }else{
    console.log("the B is greater than A");
 }


 const marks =90;
 if(marks>=90){
    console.log("Grade A");
 }else if(marks>=70){
    console.log("Grade B");
 }else{
    console.log("Grade C");
 }
  //loops  for loop

  for (let i =0; i<5; i++){
    console.log(i);
  }


   //creating an array 

  let arr =['ranjith','adhi','vishwa','sai'];
  for (let i=0; i<arr.length; i++){
    console.log(arr[i]);
  }


  //while loop

  let i = 0;
  while(i<10){
   console.log(i);
   i++;
  }

  //creating an arry for while loop
  let markss =[10,20,30,40,50,60];
  let i1 =0;
  while(i<markss[i]){
   console.log(markss[i1]);
   i++;
  }

  //creating array for names using while loop to print names

  const names2 =['ranjith','ramu','raki','roko','adgi'];

  let i2= 0;
  while(i2<names2.length){
   console.log(names2[i2]);
   i2++;
  }

// creatiing an array and using forEach method to calling the function to print the roll no's
  const roll =[1,2,4,3,5,6];

  roll.forEach((rollno)=>{
   console.log(rollno);
  }
);


//for loop for array
const array =[10,20,30,40,50,60,70];
for(let num of array){
   console.log(num);
}

//loop for array

let students=['rom','ram','hard','disk'];
for(let char of students){
   console.log(char);
}

// print the only names,rollno,dept in objects using array
const obj =[
   {names:'ranjith',rollno:10,dept:'cse'},
   { names:'adhi',rollno:20,dept:'ece'},
   { names:'sai',rollno:80,dept:'eee'},
];
obj.forEach((o)=>
{
   console.log(o.names); //only names
   console.log(o.rollno); //lony rollno's
   console.log(o.dept);//only dept
   //console.log(o.names,o.rollno,o.dept); //print all values at a time 
   
});

//Functions  in jvascript

function greet(name){
   return "hello" +name;
}

//adding a,b numbes 

const add =(a,b)=>{
   return a+b;
}
console.log(add(20,30));




