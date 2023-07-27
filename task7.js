// Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.
function romanToInteger(roman) {
    const romanNumerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };

    let result = 0;
    let prevValue = 0;

    for (let i = roman.length - 1; i >= 0; i--) {
        const currentVal = romanNumerals[roman[i]];

        if (currentVal >= prevValue) {
            result += currentVal;
        } else {
            result -= currentVal;
        }

        prevValue = currentVal;
    }

    return result;
}

console.log(romanToInteger("XXI")); 