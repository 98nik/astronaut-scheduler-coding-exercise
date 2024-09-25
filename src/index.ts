import { TaskManager } from './models/TaskManager';
import { TaskFactory } from './factories/TaskFactory';
import { validateTime } from './utils/TimeValidator';

// Initialize the Task Manager (Singleton)
const taskManager = TaskManager.getInstance();

// Add some tasks
function addTask(description: string, startTime: string, endTime: string, priority: string): void {
    if (!validateTime(startTime) || !validateTime(endTime)) {
        console.log("Error: Invalid time format.");
        return;
    }

    const task = TaskFactory.createTask(description, startTime, endTime, priority);
    taskManager.addTask(task);
}

// Remove a task
function removeTask(description: string): void {
    taskManager.removeTask(description);
}

// View all tasks
function viewTasks(): void {
    taskManager.viewTasks();
}

// Example usage
addTask("Morning Exercise", "07:00", "08:00", "High");
addTask("Team Meeting", "09:00", "10:00", "Medium");
addTask("Lunch Break", "12:00", "13:00", "Low");

// View tasks
viewTasks();

// Remove a task
removeTask("Team Meeting");

// View tasks after removal
viewTasks();
