
export class Task {
    description: string;
    startTime: string;
    endTime: string;
    priority: string;

    constructor(description: string, startTime: string, endTime: string, priority: string) {
        this.description = description;
        this.startTime = startTime;
        this.endTime = endTime;
        this.priority = priority;
    }

    printTask(): void {
        console.log(`${this.startTime} - ${this.endTime}: ${this.description} [Priority: ${this.priority}]`);
    }
}
