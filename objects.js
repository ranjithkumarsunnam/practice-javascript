const personOne ={
    name:'Ranjith Kumar',
    age:'20',
    DOB:'28/05/2005'
}
 const personTwo={
    name:'Raju',
    age:'25',
    DOB:'09/10/2003'
}
console.log(personOne.name);
// console.log(personTwo.name);
/* const personName=personOne.name;  here we are write mulitlemof sdtatements for person
const personage=personOne.age;
const personDOB=personOne.DOB;
console.log(personName,personage,personDOB) */

//we can write easy way to access the object

const { name,age,DOB}=personOne;
console.log("line 1:",name,age,DOB);



