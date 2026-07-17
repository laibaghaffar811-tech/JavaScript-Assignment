/*
Create a function that accepts an array
of student objects and returns a new array
containing:
- Student name
- Total marks
- Average marks
- Grade
*/

function calculateStudentResults(students)
{
    // Check if the input is an array
    if (!Array.isArray(students))
    {
        return "Error: Input must be an array.";
    }

    let results = [];

    // Process each student
    for (let i = 0; i < students.length; i++)
    {
        let student = students[i];
        let total = 0;

        // Calculate total marks
        for (let j = 0; j < student.marks.length; j++)
        {
            total += student.marks[j];
        }

        // Calculate average
        let average = total / student.marks.length;

        // Determine grade
        let grade;

        if (average >= 80)
        {
            grade = "A";
        }
        else if (average >= 70)
        {
            grade = "B";
        }
        else if (average >= 60)
        {
            grade = "C";
        } else if (average >= 50) 
        {
            grade = "D";
        } 
        else
        {
            grade = "F";
        }

        // Store result
        results.push({
            name: student.name,
            total: total,
            average: average,
            grade: grade
        });
    }

    return results;
}

// Test Data
const students = [
    { name: "Ali", marks: [80, 70, 90] },
    { name: "Sara", marks: [60, 55, 65] }
];

// Test
console.log(calculateStudentResults(students));
