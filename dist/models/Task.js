"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
class Task {
    constructor(description, startTime, endTime, priority) {
        this.description = description;
        this.startTime = startTime;
        this.endTime = endTime;
        this.priority = priority;
    }
    printTask() {
        console.log(`${this.startTime} - ${this.endTime}: ${this.description} [Priority: ${this.priority}]`);
    }
}
exports.Task = Task;
