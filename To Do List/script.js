function addTask(){
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if(taskText === "") return;

    const taskList = document.getElementById("task-list");

    const listItem = document.createElement("li");
    listItem.innerHTML = `${taskText} <button onclick="removeTask(this)">delete</button> `;

    taskList.appendChild(listItem);
    taskInput.value = "" ;


}

function removeTask(button){
    const taskList = document.getElementById("task-list");
    const listItem = button.parentElement;
    taskList.removeChild(listItem);
}