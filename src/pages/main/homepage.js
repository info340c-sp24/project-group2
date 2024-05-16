'use strict';

import { initializeTaskList } from './controller.js';

document.addEventListener('DOMContentLoaded', () => {
    const reminderBox = document.getElementById('reminder-box');
    if (reminderBox) {
        initializeTaskList(reminderBox);
    }
});
