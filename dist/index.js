"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TaskManager_1 = require("./models/TaskManager");
const TaskFactory_1 = require("./factories/TaskFactory");
const TimeValidator_1 = require("./utils/TimeValidator");
// Initialize the Task Manager (Singleton)
const taskManager = TaskManager_1.TaskManager.getInstance();
// Add some tasks
function addTask(description, startTime, endTime, priority) {
    if (!(0, TimeValidator_1.validateTime)(startTime) || !(0, TimeValidator_1.validateTime)(endTime)) {
        console.log("Error: Invalid time format.");
        return;
    }
    const task = TaskFactory_1.TaskFactory.createTask(description, startTime, endTime, priority);
    taskManager.addTask(task);
}
// Remove a task
function removeTask(description) {
    taskManager.removeTask(description);
}
// View all tasks
function viewTasks() {
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
