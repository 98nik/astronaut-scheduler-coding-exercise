"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkOverlap = checkOverlap;
exports.validateTime = validateTime;
function checkOverlap(newTask, existingTask) {
    return (newTask.startTime < existingTask.endTime && newTask.endTime > existingTask.startTime);
}
function validateTime(time) {
    const regex = /^([01]\d|2[0-3]):([0-5]\d)$/;
    return regex.test(time);
}
