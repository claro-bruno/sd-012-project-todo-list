window.onload = function () {
    let buttonAdd = document.querySelector("#criar-tarefa");
    let taskList = document.querySelector("#lista-tarefas");
    let inputSection = document.querySelector("#texto-tarefa");
    let buttonRm = document.querySelector("#apaga-tudo");
    let buttomRmComp = document.querySelector("#remover-finalizados");

    rmBtnCall();
    addBtn();
    rmCompBtnCall();

    // Adiciona item na lista ordenada e Adiciona marcação ao clique
    function taskGenerator() {
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
            e.target.classList.toggle('completed');
        });
        taskItem.innerHTML = inputSection.value;
        inputSection.value = "";
        taskList.appendChild(taskItem);
    };
    
    // Funcionamento do botão de Adicionar Tarefa
    function addBtn() {
        buttonAdd.addEventListener ("click", taskGenerator);
    };

    function rmBtn() {
        while(taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        };
    };

    function rmBtnCall () {
        buttonRm.addEventListener('click', rmBtn);
    };

    function rmCompBtn () {
        let completed = document.querySelectorAll(".completed");
        for(index = 0; index < completed.length; index += 1) {
            completed[index].remove();
        };
    };

    function rmCompBtnCall () {
        buttomRmComp.addEventListener('click', rmCompBtn);
    };
};