const Decrement=document.getElementById("decrease");
const Reset=document.getElementById("reset");
const Increment=document.getElementById("increase");
const Count=document.getElementById("count");

let count=0;

//Increment function
Increment.addEventListener("click",(click)=>{
    count++;
    Count.textContent = count;
});
//Decrement function
Decrement.addEventListener("click",(click)=>{
    count--;
    Count.textContent = count;

});
//Reset function
Reset.addEventListener("click",(click)=>{
    count=0;
    Count.textContent = count;
});