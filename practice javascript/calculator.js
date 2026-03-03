const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const AddBtn=document.getElementtById("addBtn");
const subBtn =document.getElementById("subBtn");
const Result =document.getElementById("result");

//Add function
AddBtn.addEventListener("click", (click) => {
    const num1=number(num1Input.value);
    const num2=number(num2Input.value);
    const sum=num1+num2;
    Result.textContent = "Result: " + sum;
});

//Subtract function
subBtn.addEventListener("click", (click) => {
    const num1=number(num1Input.value);
    const num2=number(num2Input.value);
    const diff=num1-num2;
    Result.textContent = "Result: " + diff;
});

//result function
function number(value){
    const num = parseFloat(value);
    if (isNaN(num)) {
        return 0;
    }
    return num;
}