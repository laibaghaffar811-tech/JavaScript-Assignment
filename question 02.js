/*
Write a function that accepts an array
of numbers and returns the largest number.
Do not use Math.max().
*/

function findLargest(numbers)
{
    // Check if the array is empty
    if (numbers.length == 0)
    {
        return "Array is empty.";
    }

    // Assume the first element is the largest
    let largest = numbers[0];

    // Compare each element with the current largest
    for (let i = 1; i < numbers.length; i++)
    {
        if (numbers[i] > largest)
        {
            largest = numbers[i];
        }
    }

    return largest;
}

// Test
console.log(findLargest([12, 45, 7, 89, 23]));





