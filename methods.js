// creating an array for 5 fruites
const fruites = ["apple", "banana", "grapes", "papaya", "kiwi"];
console.log(fruites[0]); // print index '0'
console.log(fruites.push("mango")); // push new item into array 'mango'
console.log(fruites.pop()); //removing the last item in array
console.log(fruites.includes("apple")); //apple includes(present) or not in array
console.log(fruites.shift());
console.log(fruites.unshift("new fruit"));
console.log(fruites.indexOf("banana"));
console.log(fruites.length);

//creating an array using student names
const StudentsNames = ["ramu", "raki", "raja", "ranjith", "vishwa"];
console.log(StudentsNames[0]);
console.log(StudentsNames.push("adhi"));
console.log(StudentsNames.pop());
console.log(StudentsNames.includes("ranjith"));
console.log(StudentsNames.indexOf("raja"));
console.log(StudentsNames.shift());
console.log(StudentsNames.unshift("roko"));
console.log(StudentsNames.indexOf("ranjith"));
console.log(StudentsNames.length);

//creating an array for user id
const userid = ["123", "456", "789", "147", "258", "369"];

const result = userid.indexOf("123");
console.log(result);

const result1 = userid.pop();
console.log(result1);

const id = userid.shift();
console.log(id);

const id1 = userid.unshift("789");
console.log(id1);

const lengths = userid.length;
console.log(lengths);

console.log(userid.includes("456"));
console.log(userid[5]);
console.log(userid.push("258"));

console.log(userid.indexOf("456"));

//subjects of students

const subjects = ["math", "science", "social", "telugu", "hindi"];

const a = subjects.pop();
console.log(a);

const b = subjects.push("marathi");
console.log(b);

const c = subjects.shift();
console.log(c);

const d = subjects.length;
console.log(d);

const e = subjects.unshift("urdu");
console.log(e);

const aa = subjects.indexOf("social");
console.log(aa);

const bb = subjects.includes("telugu");
console.log(bb);

//diff console log
console.log(subjects.pop());
console.log(subjects.push("mango"));
console.log(subjects.includes("telugu"));
console.log(subjects.indexOf("hindi"));
console.log(subjects.length);
console.log(subjects.shift());
console.log(subjects.unshift("room"));
console.log(subjects.join(","));

// examples method in Strings

const name = "ranjith";
const names = name.toUpperCase();
console.log(names);

const lowercase = name.toLowerCase();
console.log(lowercase);

const Length = name.length;
console.log(Length);

const Include = name.includes("java");
console.log(Include);

const Slice = name.slice(0, 6);
console.log(Slice);

const Replace = name.replace("ranjith", "hello");
console.log(Replace);

const Trim = name.trim("ranjith");
console.log(Trim);

const Split = name.split("").reverse().join();
console.log(Split);

// example 2 fo strings
const room = "abcde";

console.log(room.toUpperCase());
console.log(room.toLowerCase());
console.log(room.slice(0, 5));
console.log(room.length);
console.log(room.split(""));
console.log(room.trim());
console.log(room.split("").reverse().join(""));
console.log(room.includes("bcd"));

// example 3

const lett = "adhrash";
console.log(lett.toUpperCase());
console.log(lett.toLowerCase());
console.log(lett.length);
console.log(lett.includes("dhrash"));
console.log(lett.slice(0, 5));
console.log(lett.split(""));
console.log(lett.trim());
console.log(lett.split("").reverse().join());

//example 4

const nam = "vishwanath";
console.log(nam.toUpperCase());
console.log(nam.toLowerCase());
console.log(nam.length);
console.log(nam.slice(0, 4));
console.log(nam.split(""));
console.log(nam.split("").reverse().join());
console.log(nam.trim());
console.log(nam.includes("nath"));
console.log(nam.split("").reverse());

//Object in javaScript

const students1 = {
  name: "ranjith",
  age: "20",
  course: "cse",
};
console.log(students1.name);
console.log(students1.age);
console.log(students1.course);
console.log(students1);

//updated age
students1.age = "22";
console.log(students1);

//update course
students1.course = "react";
console.log(students1);
//delete the key and vales of the student
delete students1.age;
console.log(students1);

//real example

let user = {
  id: "1",
  name1: "mahesh",
  role: "admin",
};
console.log(user.name1);
console.log(user.id);
console.log(user.role);
console.log(user);
//update name
user.name1 = "ranjith";
console.log(user);
//update role
user.role = "manager";
console.log(user);

//example
const car = {
  brand: "tata",
  model: "2021",
  price: 50000,
};

console.log(car);
console.log(car.model);
console.log(car.price);

//udating car brand
car.brand = "i20";
console.log(car);

//update price
car.price = 100000;
console.log(car);

//update os model
car.model = "2020";
console.log(car);

//add color property
car.color = "blue";
console.log(car);


//create an arr for students to print names 

const students = [
  { names: "ranjith", age: "20", role: "student" },
  { names: "raju", age: "22", role: "farmer" },
  { names: "adhrash", age: "30", role: "student" },
  { names: "raki", age: "22", role: "student" },
];

for (let i = 0; i < students.length; i++) {
  console.log(students[i].names);
}
for (let i = 0; i < students.length; i++) {
  console.log(students[i].names);
}

//object for employes

const employee = {
  name:'mahesh',
  id:'1',
  role:'admin',
  salary:'900000',
};

Object.values(employee).forEach(function(name)
{
  console.log(name);

});

// vowels in alphabets 

let alphabtes ="ranjithkumar sunnamii";
let vowels="aeiou";
let count = 0;
for (let char of alphabtes)
  {
  if(vowels.includes(char)){
    count++;
  }
}
console.log("number of vowels:",count);


//combine array & objects

let arr =[
  { name:'ranjith',age:'20',role:'admin'},
  { name:'adhi',age:'22',role:'student'},
  {name:'sai',age:'25',role:'manager' },
];
Object.values(arr).forEach((name)=>{
  console.log(name);
});


