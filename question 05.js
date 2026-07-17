/*
Write a function that checks whether
a word is a palindrome.
A palindrome reads the same forward
and backward.
*/

function isPalindrome(word)
{
    // Check if the input is a string
    if (typeof word !== "string") 
    {
        return "Error: Input must be a string.";
    }

    let reversed = "";

    // Reverse the word
    for (let i = word.length - 1; i >= 0; i--)
    {
        reversed += word[i];
    }

    // Compare the original and reversed words
    return word === reversed;
}

// Test Cases

console.log(isPalindrome("hello")); // false

