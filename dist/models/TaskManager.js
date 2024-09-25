"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskManager = void 0;
const TimeValidator_1 = require("../utils/TimeValidator");
class TaskManager {
    constructor() {
        this.tasks = [];
    }
    static getInstance() {
        if (!TaskManager.instance) {
            TaskManager.instance = new TaskManager();
        }
        return TaskManager.instance;
    }
    addTask(task) {
        for (let existingTask of this.tasks) {
            if ((0, TimeValidator_1.checkOverlap)(task, existingTask)) {
                console.log(`Error: Task "${task.description}" overlaps with "${existingTask.description}".`);
                return;
            }
        }
        this.tasks.push(task);
        console.log(`Task "${task.description}" added successfully.`);
    }
    removeTask(description) {
        const initialLength = this.tasks.length;
        this.tasks = this.tasks.filter((task) => task.description !== description);
        if (this.tasks.length < initialLength) {
            console.log(`Task "${description}" removed successfully.`);
        }
        else {
            console.log(`Task "${description}" not found.`);
        }
    }
    viewTasks() {
        if (this.tasks.length === 0) {
            console.log("No tasks scheduled for the day.");
            return;
        }
        this.tasks.sort((a, b) => a.startTime.localeCompare(b.startTime));
        this.tasks.forEach(task => task.printTask());
    }
}
exports.TaskManager = TaskManager;
