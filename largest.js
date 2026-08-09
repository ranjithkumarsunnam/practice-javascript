// let array = [1,2,3,4,6,6,7,8,100];
// let largest = array[0];
// for(let i =0; i<array.length; i++){
//     if(array[i] > largest){
//         largest = array[i];
//     }
// }
// console.log(`Largest Number form the array: ${largest}`);



// function smallestNumber(numbers) {
//     let smallest = numbers[0];
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] < smallest) {
//             smallest = numbers[i];
//         }
//     }
//     return smallest;
// }
// console.log(`Smallest number from the array: ${smallestNumber([1, 2, 3, 4, 5, 68, 8])}`);


//Smallest number 

// let smallestNumber = [1,2,100,3,-100,1,2,5,6,8,9];
// let small = smallestNumber[0];

// for(let i=0; i<smallestNumber.length; i++){
//     if(smallestNumber[i]<small){
//         small = smallestNumber[i];
//     }
// }
// console.log(`Smallest Number is ${small}`);






//even And odd numbers of count

let evenNum = [12,1,3,5,4,8,9,7,1,2,7,8,10,12,3,4];
let even = [];
let odd = [];
let evenCount = 0;
let oddCount = 0;
for(let i = 0; i<evenNum.length; i++){
    if(evenNum[i]%2==0)
    {
        even.push(evenNum[i]);
        evenCount++;

    }
    else{
        odd.push(evenNum[i]);
        oddCount++;
    }
}
console.log(`Even Numbers is: ${even} 
even numbers of Count: ${evenCount}`);
console.log(`Odd Numbers is: ${odd} 
odd numbers of count: ${oddCount}`);





