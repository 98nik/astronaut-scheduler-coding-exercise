import { Task } from '../models/Task';

export function checkOverlap(newTask: Task, existingTask: Task): boolean {
    return (newTask.startTime < existingTask.endTime && newTask.endTime > existingTask.startTime);
}

export function validateTime(time: string): boolean {
    const regex = /^([01]\d|2[0-3]):([0-5]\d)$/;
    return regex.test(time);
}