import {login} from "./login";
import "./taskList.css"

/*
* TaskList Page
* */
function taskList(user, tasks) {

    const titleFrame = document.createElement('div');
    titleFrame.classList.add('titleFrame');

    const userTitle = document.createElement('div');
    userTitle.classList.add("userTitle");
    userTitle.innerText = `hello ${user} \n ${Object.keys(tasks).length} tasks pending`;

    const bigTitle = document.createElement('div');
    bigTitle.classList.add('bigTitle');
    bigTitle.innerText = "TaskDo";

    const logoutBtn = document.createElement('div');
    logoutBtn.innerText = "Log out";
    logoutBtn.classList.add("logout");
    logoutBtn.onclick = () => {
        document.body.innerText = "";
        login();
    };

    titleFrame.appendChild(userTitle);
    titleFrame.appendChild(bigTitle);
    titleFrame.appendChild(logoutBtn);

    //listElement is a vertical frame for createNewTask button and list of task
    const listElement = document.createElement('div');
    listElement.classList.add("listElementFrame");

    const newTaskIcon = document.createElement('div');
    newTaskIcon.classList.add("newTaskIcon");
    newTaskIcon.onclick = () => {
        newTaskInput.style.display = "block";
    }

    const newTaskInput = document.createElement('input');
    newTaskInput.classList.add("newTaskInput");
    newTaskInput.onchange = () => {
        const createdTask = newTaskInput.value;
        tasks[createdTask] = false;
        document.body.innerHTML = "";
        newTaskInput.style.display = "none";
        taskList(user, tasks);

    }

    listElement.appendChild(newTaskIcon);
    listElement.appendChild(newTaskInput);

    for(let task in  tasks) {
        const taskItem = document.createElement('div');
        taskItem.classList.add("taskItem");
        const deleteIcon = document.createElement('button');
        deleteIcon.classList.add("deleteIcon");

        const checkIcon = document.createElement('button');

        const text = document.createElement('div');
        text.classList.add("text");
        if(tasks[task]) {
            checkIcon.classList.add("checkedIcon");
            text.innerHTML = task.strike();
        } else {
            checkIcon.classList.add("checkIcon");
            text.innerText = task;
        }

        checkIcon.onclick = () => {

            if(checkIcon.classList.contains("checkIcon")) {
                text.innerHTML = text.innerText.strike();
                checkIcon.classList.replace("checkIcon", "checkedIcon");
                tasks[task] = true;
            } else {
                text.innerHTML = text.innerText;
                checkIcon.classList.replace("checkedIcon", "checkIcon");
                tasks[task] = false;
            }
        }

        deleteIcon.onclick = () => {
            console.log("delete");
            delete tasks[task];
            document.body.innerText = "";
            taskList(user, tasks);
        }

        taskItem.appendChild(deleteIcon);
        taskItem.appendChild(checkIcon);
        taskItem.appendChild(text);
        listElement.appendChild(taskItem);

    }

    document.body.appendChild(titleFrame);
    document.body.appendChild(listElement);

}

export {taskList};