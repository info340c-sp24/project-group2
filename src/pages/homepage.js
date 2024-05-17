'use strict';

export function homepage() {
    return (
        <div>
            <div class="container">
                <h1>RSO Homepage</h1>
            </div>
            <a href="#" class="upper-right"><span class="material-icons">settings</span></a>
        
        
            <section id="home"> 
                <div class="purple-rectangle">
                    <h2>Reminders</h2>
                        <form id="reminder-box">
                            <div class="reminder-item">
                                <label>
                                    <input type="checkbox" name="reminder" value="reminder1">
                                    Sign Registration Form
                                </label>
                            </div>
                            <div class="reminder-item">
                                <label>
                                    <input type="checkbox" name="reminder" value="reminder2">
                                    Practice @ 7pm, IMA
                                </label>
                            </div>
                            <div class="reminder-item">
                                <label>
                                    <input type="checkbox" name="reminder" value="reminder3">
                                    Upload Practice Video
                                </label>
                            </div>
                        </form>
                    </div>
            
                    <div class="flex-container">
                        <div class="flex-item calendar">
                            <img src="img/calendar.png" alt="Calendar Image">    
                            <h2><a href="calendar.html">Calendar</a></h2>
                        </div>
                        <div class="flex-item message">
                            <img src="img/messages.jpg" alt="Messaging">
                            <h2><a href="messaging.html">Messaging</a></h2>
                        </div>
                        <div class="flex-item media">
                            <img src="img/media.png" alt="Media Upload">
                            <h2><a href="media.html">Media</a></h2>
                        </div>
                    </div>
            </section>
        </div>
    );
}

            












function initializeTaskList(taskListElement) {
    function markCompleteCallback(task) {
        markTaskAsComplete(task);
        // Re-render the task list to reflect the changes
        const tasks = getIncompleteTasks();
        displayTaskList(taskListElement, tasks, markCompleteCallback);
    }

    const tasks = getIncompleteTasks();
    displayTaskList(taskListElement, tasks, markCompleteCallback);
}

document.addEventListener('DOMContentLoaded', () => {
    const reminderBox = document.getElementById('reminder-box');
    if (reminderBox) {
        initializeTaskList(reminderBox);
    }
});

function renderTaskList(tasks, markCompleteCallback) {
    const ul = document.createElement('ul');
    ul.classList.add('list-group', 'list-group-flush');

    if (tasks.length === 0) {
        const messageDiv = document.createElement('div');
        messageDiv.textContent = 'None!';
        return messageDiv;
    }

    tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item');

        listItem.textContent = ` ${task.description}`;

        const button = document.createElement('button');
        button.classList.add('btn', 'btn-sm', 'btn-warning');
        button.innerHTML = '<span class="material-icons-outlined">done</span>';

        button.addEventListener('click', () => {
            if (markCompleteCallback) {
                markCompleteCallback(task);
            }
        });

        listItem.prepend(button);
        ul.appendChild(listItem);
    });

    return ul;
}

function displayTaskList(taskListElement, tasks, markCompleteCallback) {
    taskListElement.innerHTML = '';
    const taskList = renderTaskList(tasks, markCompleteCallback);
    taskListElement.appendChild(taskList);
}

function getIncompleteTasks() {
    // Dummy data for illustration; replace with actual data retrieval logic
    return [
        { id: 1, description: 'Sign Registration Form' },
        { id: 2, description: 'Practice @ 7pm, IMA' },
        { id: 3, description: 'Upload Practice Video' }
    ];
}

function markTaskAsComplete(task) {
    console.log(`Marking task as complete: ${task.description}`);
    // Add logic to mark the task as complete, e.g., update the database
}