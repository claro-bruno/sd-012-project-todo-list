window.onload = function () {
    let buttonAdd = document.querySelector("#criar-tarefa");
    let taskList = document.querySelector("#lista-tarefas");
    let inputSection = document.querySelector("#texto-tarefa");
    

    addBtn();

    // Adiciona item na lista ordenada e Adiciona marcação ao clique
    function creatTask() {
        let taskItem = document.createElement('li');
        taskItem.classList.add('tarefa');
        taskItem.addEventListener("click", function(e) {
            let selected = document.querySelector('.selected')
            if(selected !== null) {
                selected.classList.remove('selected');
                e.target.classList.add('selected');
            } else {
                e.target.classList.add('selected');
            }
            
        });
        taskItem.addEventListener('dblclick', function(e) {
            let completed = document.querySelector('.completed');
            if(e.target.className === "tarefa" || e.target.className === "tarefa selected") {
                e.target.classList.add("completed");
            } else if (e.target.classname === 'tarefa completed' || e.target.classname === "tarefa selected completed" || "tarefa completed selected") {
                e.target.classList.remove('completed')
            };
        });
        taskItem.innerHTML = inputSection.value;
        inputSection.value = "";
        taskList.appendChild(taskItem);
    };
    
    // Funcionamento do botão de Adicionar Tarefa
    function addBtn() {
        buttonAdd.addEventListener ("click", creatTask);
    };
};