import {taskList} from "./taskList";
import {login} from "./login";

function authenticate(user) {
    const usertaskMap = {
        "Kiki": {"Learn Javascript": false, "Learn webpack": false, "Watch Youtube": false},
        "Jazz": {"Sleep": false, "Go for a walk": false},
        "Coco": {"Play with Jazz": false, "Get some treat": false}
    }
    if (!user || user === "") {
        alert("Please input user name");
        login();

    } else {
        const validUsers = ["Kiki", "Jazz", "Coco"];
        let authenticated = false;

        for(let index in validUsers) {
            if(validUsers[index] === user) {
                authenticated = true;
                taskList(user, usertaskMap[user]);
                break;
            }
        }

        if(!authenticated) {
            alert("Authenticate failed: please try another user");
            login();
        }
    }
}

export {authenticate}