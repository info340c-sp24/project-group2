import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

function HomePage() {
    return (
        <>
            <nav>
                <div className="container">
                    <h1>RSO Homepage</h1>
                </div>
            </nav>

            <div id="main">
                <section id="home">
                    <ToDoList />

                    <div className="flex-container">
                        <div className="flex-item calendar">
                            <img src={`img/calendar.png`} alt="Calendar Image" />
                            <h2>
                                <NavLink to="/calendar">Calendar</NavLink>
                            </h2>
                        </div>

                        <div className="flex-item message">
                            <img src={`img/messages.jpg`} alt="Messaging" />
                            <h2>
                                <NavLink to="/messaging">Messaging</NavLink>
                            </h2>
                        </div>

                        <div className="flex-item media">
                            <img src={`img/media.png`} alt="Media Upload" />
                            <h2>
                                <NavLink to="/media">Media</NavLink>
                            </h2>
                        </div>
                    </div>
                </section>
            </div>

            <footer>
                <p>
                Copyright <span>©</span> 2024 Project Group 2. All rights reserved.
                </p>
            </footer>
        </>
    );
}

export default HomePage;

function ToDoList() {
    const [tasks, setTasks] = useState(getIncompleteTasks());
    const reminderBoxRef = useRef(null);

    useEffect(() => {
        if (reminderBoxRef.current) {
            displayTaskList(reminderBoxRef.current, tasks, markCompleteCallback);
        }
    }, [tasks]);

    const markCompleteCallback = (task) => {
        setTasks(prevTasks => prevTasks.filter(t => t.id !== task.id));
    };

    const addTask = (description) => {
        setTasks(prevTasks => [...prevTasks, { id: Date.now(), description }]);
    };

    return (
        <div className="purple-rectangle">
            <h2>Reminders</h2>
            <div id="reminder-box" ref={reminderBoxRef}></div>
            <AddTaskForm addTask={addTask} />
        </div>
    );
}

function AddTaskForm({ addTask }) {
    const [newTask, setNewTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTask.trim()) {
            addTask(newTask);
            setNewTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="New reminder..."
            />
            <button type="submit">Add</button>
        </form>
    );
}

function renderTaskList(tasks, markCompleteCallback) {
    const ul = document.createElement('ul');
    ul.classList.add('list-group', 'list-group-flush');

    if (tasks.length === 0) {
        const messageDiv = document.createElement('div');
        messageDiv.textContent = 'None! Great job :)';
        return messageDiv;
    }

    tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        listItem.textContent = ` ${task.description}`;

        const button = document.createElement('button');
        button.classList.add('btn', 'btn-sm', 'btn-warning');
        button.innerHTML = '<span className="material-icons-outlined">done</span>';

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
    return [
        { id: 1, description: 'Sign Registration Form' },
        { id: 2, description: 'Practice @ 7pm, IMA' },
        { id: 3, description: 'Upload Practice Video' }
    ];
}