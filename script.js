window.onload = function () {
    let buttonAdd = document.querySelector("#criar-tarefa");
    let taskList = document.querySelector("#lista-tarefas");
    let inputSection = document.querySelector("#texto-tarefa");
    

    addBtn();

    // Adiciona item na lista ordenada e Adiciona marcação ao clique
    function creatTask() {
        let taskItem = document.createElement('li');
        taskItem.addEventListener("click", function(e) {
            let selected = document.querySelector('.selected')
            if(selected !== null) {
                selected.classList.remove('selected');
                e.target.classList.add('selected');
            } else {
                e.target.classList.add('selected');
            }
            
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