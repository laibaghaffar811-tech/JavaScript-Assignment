/*
Each task contains:
{
    id: 1,
    title: "Complete JavaScript Quiz",
    completed: false
}
*/

let tasks = [];
let nextId = 1;

// Add a new task
function addTask(title) 
{
    let task = {
        id: nextId,
        title: title,
        completed: false
    };

    tasks.push(task);
    nextId++;

    return task;
}

// Delete a task by ID
function deleteTask(id) 
{
    for (let i = 0; i < tasks.length; i++) 
    {
        if (tasks[i].id == id) 
        {
            tasks.splice(i, 1);
            return "Task deleted successfully.";
        }
    }

    return "Error: Task ID not found.";
}

// Mark a task as completed
function markTaskCompleted(id) 
{
    for (let i = 0; i < tasks.length; i++) 
    {
        if (tasks[i].id == id)
        {
            tasks[i].completed = true;
            return "Task marked as completed.";
        }
    }

    return "Error: Task ID not found.";
}

// Return all tasks
function getAllTasks() 
{
    return tasks;
}

// Return completed tasks
function getCompletedTasks() 
{
    let completedTasks = [];

    for (let i = 0; i < tasks.length; i++)
    {
        if (tasks[i].completed) 
        {
            completedTasks.push(tasks[i]);
        }
    }

    return completedTasks;
}

// Return pending tasks
function getPendingTasks() {
    let pendingTasks = [];

    for (let i = 0; i < tasks.length; i++) {
        if (!tasks[i].completed) {
            pendingTasks.push(tasks[i]);
        }
    }

    return pendingTasks;
}

// Test Cases 

addTask("Complete JavaScript Quiz");
addTask("Practice Coding");
addTask("Submit Assignment");

markTaskCompleted(2);

console.log("All Tasks:");
console.log(getAllTasks());

console.log("Completed Tasks:");
console.log(getCompletedTasks());

console.log("Pending Tasks:");
console.log(getPendingTasks());

console.log(deleteTask(1));

console.log("Tasks After Deletion:");
console.log(getAllTasks());

console.log(markTaskCompleted(10)); // Task ID not found


