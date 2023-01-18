import {authenticate} from "./authenticate";
import "./login.css";

/*
* Login page
* */
function login() {
    const element = document.createElement('div');
    element.classList.add("elementFrame");

    // Text
    const TaskDo = document.createElement('div');
    const Mission = document.createElement('div');

    TaskDo.classList.add("big-title");
    Mission.classList.add("middle-text");

    TaskDo.innerHTML = "TaskDo";
    Mission.innerHTML = "Manage you Task Checklist Easily";

    // Input
    const inputName = document.createElement('input');
    inputName.classList.add("input-name");
    inputName.placeholder = "name";

    // Button
    const submitBtn = document.createElement('button');
    submitBtn.classList.add('submitBtn');
    submitBtn.innerText = "Lets Start";
    submitBtn.onclick = () => {
        document.body.innerHTML = "";
        authenticate(inputName.value);
    }

    element.appendChild(TaskDo);
    element.appendChild(Mission);
    element.appendChild(inputName);
    element.appendChild(submitBtn);

    document.body.appendChild(element);

}

export {login}