/*let a = 10;
let b = 20;
let c = a+b;
console.log(a+b);

//html access bt javascript
var header  = document.getElementById("header").innerHTML = "heyy haiii";
console.log(header);*/

/*let Students = ["ramu","raki","rako","maxx"];

for(let i= 0; i<Students.length;i++)
{
    console.log(Students[i]);
}

let marks = [20,30,10,40,5,90,88,30,55];
for(let i = 0; i<marks.length; i++)
{
    console.log(marks[i]);
}*/

/*let Students = ["mahesh","suresh","sathish","rakesh","ramu","mahesh","mahesh"];

let count = 0;
 for(let i= 0; i<Students.length;i++)
 {
    if(Students[i]=="mahesh")
        {
        count++;
    }
 }
 console.log(count);

//access the html elements*/

const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit",function(event){
  event.preventDefault();

  let emailValue = email.value;

  let passwordValue = password.value;

  /*function Validity() {
    let formValue = form.value;
    let emailValue = email.value.trim().toLowerCase();
    let passwordValue = password.value.trim().<10;
  */

  if(emailValue === "admin@example.com" && passwordValue === "password123") {
    console.log("Login successful!");
  } else {
    console.log("Invalid email or password.");
  }
});

