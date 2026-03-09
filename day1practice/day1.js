let marks = [10, 20, 30, 40, 50];
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);

//her we are declareing the array of students
let students = ["mahesh", "suresh", "rakesh", "ramu", "mahesh"];
// its print total no.of students in array
console.log(students.length);

//it print names of the students in array
for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}
// counting the numbers of time mahesh is repeating in array

let count = 0;
for (let i = 0; i < students.length; i++) {
  if (students[i] == "mahesh") {
    count++;
  }
}
console.log(count);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const form = document.getElementById("form");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  let emails = "admin@example.com";
  let passwords = "123";
  let emailValue = email.value;
  let passwordValue = password.value;

  if (emailValue === emails && passwordValue === passwords) {
    console.log("Login successful");
  } else {
    console.log("Invalid email or password");
  }
});
let names = ["ramu","ranjith","raki"]; //arrayof names
console.log(names[0].toUpperCase());

let namess = "ranjith"; //string of name
console.log(namess.toUpperCase());