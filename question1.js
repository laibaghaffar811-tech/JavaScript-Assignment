/*
Write a function that takes a string
and returns the reversed string.
*/

// Function to reverse a string
function reverseString(str) {
    // Check if the input is a string
    if (typeof str !== "string") 
    {
        return "Error: Input must be a string.";
    }

    let reversed = "";

    // Reverse the string using a loop
    for (let i = str.length - 1; i >= 0; i--)
    {
        reversed += str[i];
    }

    return reversed;
}

// Test
console.log(reverseString("DataX"));

