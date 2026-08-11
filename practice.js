let arr = [2, 3, 4, 5, 2, 3, 4, 3, 2, 2, 2, 2, 2, 2];
let counted = [];
  let count = 0;

for (let i = 0; i < arr.length; i++) {
    // Skip the number if it was already counted
    if (counted.includes(arr[i])) {
        continue;
    }

    

    // Count how many times arr[i] appears
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            count++;
        }
    }

    console.log(arr[i] + " appears " + count + " times");

    // Remember that this number was counted
    counted.push(arr[i]);
}