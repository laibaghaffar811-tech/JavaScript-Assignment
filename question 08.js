/*
Write a function that returns the
second largest unique number from an array.
Handle duplicate values correctly.
*/

function secondLargest(numbers)
{
    // Check if the input is a valid array
    if (!Array.isArray(numbers) || numbers.length < 2)
    {
        return "Error: Please provide an array with at least two numbers.";
    }

    let largest = null;
    let secondLargest = null;

    for (let i = 0; i < numbers.length; i++) 
    {
        let current = numbers[i];

        if (largest == null || current > largest)
        {
            secondLargest = largest;
            largest = current;
        } 
        else if (
            current !== largest &&
            (secondLargest == null || current > secondLargest)
        )
        {
            secondLargest = current;
        }
    }

    if (secondLargest == null)
    {
        return "Error: No second largest unique number found.";
    }

    return secondLargest;
}

// Test
console.log(secondLargest([10, 5, 8, 10, 3]));
