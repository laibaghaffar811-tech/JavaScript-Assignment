/*
Write a function that removes duplicate
values from an array.
Do not use Set.
*/

function removeDuplicates(arr) {
    // Check if the input is an array
    if (!Array.isArray(arr)) {
        return "Error: Input must be an array.";
    }

    let uniqueArray = [];

    // Add only unique values to the new array
    for (let i = 0; i < arr.length; i++)
    {
        if (!uniqueArray.includes(arr[i])) 
        {
            uniqueArray.push(arr[i]);
        }
    }

    return uniqueArray;
}

// Test
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));



