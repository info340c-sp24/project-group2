'use strict';

export function renderTaskList(tasks, markCompleteCallback) {
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

export function displayTaskList(taskListElement, tasks, markCompleteCallback) {
    taskListElement.innerHTML = '';
    const taskList = renderTaskList(tasks, markCompleteCallback);
    taskListElement.appendChild(taskList);
}
