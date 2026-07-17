/*
Write a function that groups people
according to their age.
*/

function groupPeopleByAge(people)
{
    // Check if the input is an array
    if (!Array.isArray(people))
    {
        return "Error: Input must be an array.";
    }

    let groupedPeople = {};

    // Group people by age
    for (let i = 0; i < people.length; i++)
    {
        let person = people[i];

        if (!groupedPeople[person.age]) 
        {
            groupedPeople[person.age] = [];
        }

        groupedPeople[person.age].push(person.name);
    }

    return groupedPeople;
}

// Test Data
const people = [
    { name: "Ali", age: 20 },
    { name: "Sara", age: 25 },
    { name: "Ahmed", age: 20 }
];

// Test
console.log(groupPeopleByAge(people));
