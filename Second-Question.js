function findMostFrequentItem(arr) {
    // Check if the array is not empty
    if (arr.length === 0) {
        console.log("Array is empty.");
        return null;
    }

    // Create an object to store the frequency of each item
    const frequencyMap = {};
    let maxFrequency = 0;
    let mostFrequentItem = arr[0];

    // Count the frequency of each item in the array
    arr.forEach(item => {
        frequencyMap[item] = (frequencyMap[item] || 0) + 1;

        // Update the most frequent item if needed
        if (frequencyMap[item] > maxFrequency) {
            maxFrequency = frequencyMap[item];
            mostFrequentItem = item;
        }
    });

    return mostFrequentItem;
}

// Example usage
const myArray = [1, 2, 3, 2, 4, 5, 2, 2, 6, 2];
const result = findMostFrequentItem(myArray);

if (result !== null) {
    console.log(`The most frequent item is: ${result}`);
}
