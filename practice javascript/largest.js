let array = [1,2,3,4,6,6,7,8,100];
let largest = array[0];
for(let i =0; i<array.length; i++){
    if(array[i] > largest){
        largest = array[i];
    }
}
console.log(`Largest Number form the array: ${largest}`);



function smallestNumber(numbers) {
    let smallest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < smallest) {
            smallest = numbers[i];
        }
    }
    return smallest;
}
console.log(`Smallest number from the array: ${smallestNumber([1, 2, 3, 4, 5, 68, 8])}`);


//Smallest number in the array 

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


//Finding the SecondLargest Number 

let Numbers = [1,2,3,4,5,6,7,100,210,350,10,8,9,10];

let Large = Numbers[0];

for(let i = 0; i<Numbers.length; i++){
    if(Numbers[i]>Large){
        Large = Numbers[i];
    }
}

let SecondLargest  = Numbers[0];

for(let  i = 0; i<Numbers[i]; i++){
    if(Numbers[i]<Large && Numbers[i]>SecondLargest){
        SecondLargest = Numbers[i];
    }
}
console.log("Largest Number is:",Large);
console.log("SecondLargest is:",SecondLargest);


//Largest Numbers using comparing the numbers

let num = [1,100,2,12,3,2,5,4];
let  L = num[0];
let S = num[1];

for(let i = 0; i<num.length; i++){
    if(num[i]>L){
        S = L;
        L = num[i];
    }
    else if(num[i]>S && num[i]!==L){
        S = num[i];
    }
}
console.log("Large:" + L)
console.log("Second Largest:"+S)




//find the first repeating non-repeating

let arr = [10,20,50,30,40,20,30,10,]

for(let i=0; i<arr.length; i++){
    let count =0;
    for(let j =0; j<arr.length; j++){
        if(arr[i]===arr[j]){
            count++;

        }
    }
    if(count===1){
    console.log("First non repeating number",arr[i]);
    break;
}
}


//find the common Elments in two arrays

let arr1 = [10,20,30,40,50,70];
let arr2 = [30,10,20,40,60,80,70,70];

for(let i=0; i<arr1.length; i++){
    for(let j=0; j<arr2.length; j++){
        if(arr1[i]===arr2[j] ){
            console.log(arr1[i]);
            break;
        }
    }
}



//finding the Intersection without Duplicates
let arr1 = [10,20,30,40,50,70,70,40];
let arr2 = [30,10,20,40,60,80,70,70];
let common = [];

for(let i=0; i<arr1.length; i++){
    for(let j=0; j<arr2.length; j++){
        if(arr1[i]===arr2[j] ){
            let alreadyexist = false;
            for(let k=0; k<common.length; k++){
                if(common[k]===arr1[i]){
                    alreadyexist = true;
                    break;
                }
            }
            if(!alreadyexist){
                common.push(arr1[i])
            }
            break;
        }
    }
}
console.log(common)








































