import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ProfilePopUp from './profilepopup';
import { Helmet } from 'react-helmet';

function HomePage() {
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const toggleProfile = () => {
        setIsProfileOpen(!isProfileOpen);
    };

    return (
        <>  
            <nav className="nav-container">
                <Helmet>
                    <title>RSO Communication Platform | Home</title>
                </Helmet>

                <div className="nav-left">
                    <h1>RSO Homepage</h1>
                </div>

                <div className="nav-right">
                    <div className="profile-icon" onClick={toggleProfile}>
                        <span className="material-icons">person</span>
                    </div>
                </div>
                
            </nav>
            
            <div id="main">
                {/* <button onClick={() => googleSignIn()}>Sign In For Calendar</button> */}
                <section id="home">
                    <ToDoList />

                    <div className="flex-container">
                        <div className="flex-item calendar">
                            <img src={`img/calendar.png`} alt="Calendar" />
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

            {/* Profile pop-up */}
            <ProfilePopUp isOpen={isProfileOpen} onClose={toggleProfile} />

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
        listItem.classList.add('list-group-item', 'task-item');

        const descriptionSpan = document.createElement('span');
        descriptionSpan.textContent = task.description;
        descriptionSpan.classList.add('task-description');

        const button = document.createElement('button');
        button.classList.add('btn', 'btn-sm', 'done-button');
        button.innerHTML = '<span className="material-icons-outlined">done</span>';

        button.addEventListener('click', () => {
            if (markCompleteCallback) {
                markCompleteCallback(task);
            }
        });

        listItem.appendChild(descriptionSpan);
        listItem.appendChild(button);
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

/*
CITATIONS:
Problem Set 6 problem C from INFO340 C Lectures (ES6 Modules)
*/