// Write a JavaScript program to find the most frequent element in an array and return it.
function findMostFrequentElement(arr) {
    const frequencyMap = {};
    let mostFrequentElement;
    let maxFrequency = 0;

    for (let num of arr) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;

        if (frequencyMap[num] > maxFrequency) {
            maxFrequency = frequencyMap[num];
            mostFrequentElement = num;
        }
    }

    return mostFrequentElement;
}

const inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];
console.log(findMostFrequentElement(inputArray));