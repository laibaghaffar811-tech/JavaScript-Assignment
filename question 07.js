/*
Write a function that counts how many
times each character appears in a string.
Ignore spaces.
*/

function characterFrequency(str) 
{
    // Check if the input is a string
    if (typeof str !== "string")
    {
        return "Error: Input must be a string.";
    }

    let frequency = {};

    // Count each character (ignore spaces)
    for (let i = 0; i < str.length; i++) 
    {
        let character = str[i];

        if (character === " ") 
        {
            continue;
        }

        if (frequency[character]) 
        {
            frequency[character]++;
        } 
        else
        {
            frequency[character] = 1;
        }
    }

    return frequency;
}

// Test
console.log(characterFrequency("hello"));

