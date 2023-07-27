// Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 
function sumPositiveNumbers(arr) {
    let sum = 0;
    for (let num of arr) {
        if (num > 0) {
            sum += num;
        }
    }
    return sum;
}

const inputArray = [2, -5, 10, -3, 7];
console.log(sumPositiveNumbers(inputArray));