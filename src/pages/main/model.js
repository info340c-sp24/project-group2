'use strict';

export function getIncompleteTasks() {
    // Dummy data for illustration; replace with actual data retrieval logic
    return [
        { id: 1, description: 'Sign Registration Form' },
        { id: 2, description: 'Practice @ 7pm, IMA' },
        { id: 3, description: 'Upload Practice Video' }
    ];
}

export function markTaskAsComplete(task) {
    console.log(`Marking task as complete: ${task.description}`);
    // Add logic to mark the task as complete, e.g., update the database
}
