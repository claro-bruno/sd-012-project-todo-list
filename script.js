window.onload = function () {
    let buttonAdd = document.querySelector("#criar-tarefa");
    let taskList = document.querySelector("#lista-tarefas");
    let inputSection = document.querySelector("#texto-tarefa");
    

    addBtn();

    function creatTask() {
        let taskItem = document.createElement('li');
        taskItem.innerHTML = inputSection.value;
        inputSection.value = "";
        taskList.appendChild(taskItem);
    };

    function addBtn() {
        buttonAdd.addEventListener ("click", creatTask);
    };
};