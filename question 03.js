/*
Write a function that counts the number
of vowels in a given string.
Vowels: a, e, i, o, u
The function should work with both
uppercase and lowercase letters.
*/

function countVowels(str)
{
    // Check if the input is a string
    if (typeof str !== "string")
    {
        return "Error: Input must be a string.";
    }

    let count = 0;
    const vowels = "aeiouAEIOU";

    // Check each character
    for (let i = 0; i < str.length; i++) 
    {
        if (vowels.includes(str[i])) 
        {
            count++;
        }
    }

    return count;
}

// Test
console.log(countVowels("JavaScript"));
