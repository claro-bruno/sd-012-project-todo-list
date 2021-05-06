window.onload = function () {
    let buttonAdd = document.querySelector("#criar-tarefa");
    let taskList = document.querySelector("#lista-tarefas");
    let inputSection = document.querySelector("#texto-tarefa");
    

    addBtn();

    // Adiciona item na lista ordenada
    function creatTask() {
        let taskItem = document.createElement('li');
        taskItem.addEventListener("click", function() {
            taskItem.style.backgroundColor = "rgb(128, 128, 128)";
        })
        taskItem.innerHTML = inputSection.value;
        inputSection.value = "";
        taskList.appendChild(taskItem);
    };
    
    // Funcionamento do botão de Adicionar Tarefa
    function addBtn() {
        buttonAdd.addEventListener ("click", creatTask);
    };
};