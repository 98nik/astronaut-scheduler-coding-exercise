
import { Task } from './Task';
import { checkOverlap } from '../utils/TimeValidator';

export class TaskManager {
    private static instance: TaskManager;
    private tasks: Task[] = [];

    private constructor() {}

    public static getInstance(): TaskManager {
        if (!TaskManager.instance) {
            TaskManager.instance = new TaskManager();
        }
        return TaskManager.instance;
    }

    public addTask(task: Task): void {
        for (let existingTask of this.tasks) {
            if (checkOverlap(task, existingTask)) {
                console.log(`Error: Task "${task.description}" overlaps with "${existingTask.description}".`);
                return;
            }
        }
        this.tasks.push(task);
        console.log(`Task "${task.description}" added successfully.`);
    }

    public removeTask(description: string): void {
        const initialLength = this.tasks.length;
        this.tasks = this.tasks.filter((task) => task.description !== description);
        if (this.tasks.length < initialLength) {
            console.log(`Task "${description}" removed successfully.`);
        } else {
            console.log(`Task "${description}" not found.`);
        }
    }

    public viewTasks(): void {
        if (this.tasks.length === 0) {
            console.log("No tasks scheduled for the day.");
            return;
        }

        this.tasks.sort((a, b) => a.startTime.localeCompare(b.startTime));
        this.tasks.forEach(task => task.printTask());
    }
}
