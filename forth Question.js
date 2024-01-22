function sumOfSquares(arr) {
    // Ensure the input is an array
    if (!Array.isArray(arr)) {
        return 'Input is not an array.';
    }

    // Calculate the sum of squares
    const sum = arr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue ** 2;
    }, 0);

    return sum;
}

// Example usage:
const myArray = [1, 2, 3, 4, 5];
const result = sumOfSquares(myArray);

console.log(`The sum of squares of the elements in the array is: ${result}`);
