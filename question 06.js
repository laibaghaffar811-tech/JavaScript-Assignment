/*
Print numbers from 1 to 100.
- Print "Fizz" if divisible by 3.
- Print "Buzz" if divisible by 5.
- Print "FizzBuzz" if divisible by both 3 and 5.
- Otherwise, print the number.
*/

function fizzBuzz()
{
    for (let i = 1; i <= 100; i++)
    {

        if (i % 3 == 0 && i % 5 == 0) 
        {
            console.log("FizzBuzz");
        } 
        else if (i % 3 == 0) 
        {
            console.log("Fizz");
        } 
        else if (i % 5 == 0)
        {
            console.log("Buzz");
        } 
        else
        {
            console.log(i);
        }

    }
}

// Test
fizzBuzz();

