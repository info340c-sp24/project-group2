'use strict';

import { getIncompleteTasks, markTaskAsComplete } from './model.js';
import { displayTaskList } from './view.js';

export function initializeTaskList(taskListElement) {
    function markCompleteCallback(task) {
        markTaskAsComplete(task);
        // Re-render the task list to reflect the changes
        const tasks = getIncompleteTasks();
        displayTaskList(taskListElement, tasks, markCompleteCallback);
    }

    const tasks = getIncompleteTasks();
    displayTaskList(taskListElement, tasks, markCompleteCallback);
}
