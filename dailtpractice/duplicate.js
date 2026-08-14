let arr = [10,20,40,30,20,5,5];
// let count =0;
// let duplicate = [];
 
 for(let i=0;i<arr.length;i++){
    for(let j=i+1; j<arr.length;j++){
        if(arr[i]===arr[j]){
            //  count++;
            // duplicate.push(arr[j]);
            console.log(`Duplicate elements :${arr[j]}`);
            // console.log(count)
        }
       
      
    }
 }





 // Missing Number
 let numbers = [1, 2, 3, 5, 6];
let expectedSum = 0;
let actualSum = 0;

for (let i = 1; i <= numbers.length + 1; i++) {
    expectedSum =expectedSum+i;
}

for (let i = 0; i < numbers.length; i++) {
    actualSum = actualSum+numbers[i];
}

let missing = expectedSum - actualSum;
console.log("Missing Number:", missing);