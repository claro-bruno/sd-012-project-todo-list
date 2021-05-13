const taskList = document.getElementById("lista-tarefas");
const criarTarefa = document.getElementById("criar-tarefa");
const conteudoInput = document.getElementById("texto-tarefa");
const li = document.querySelector(".listItem");
const listElmnt = 'lista-tarefas';

//criando item da lista
function createListItem() {
    criarTarefa.addEventListener("click", function(event) {
        let newListItem = document.createElement("li");
        newListItem.classList.add("listItem");
        newListItem.innerHTML = conteudoInput.value;
        taskList.appendChild(newListItem);
        conteudoInput.value = "";
        console.log(taskList);
    });
};
createListItem();

function selectItem() {
    taskList.addEventListener("click", function(event) {
        const itemList = document.querySelector(".selected");
        if (itemList != null) {
            itemList.classList.remove('selected');
        }
        event.target.classList.add("selected");
    });
};
selectItem();

// function completeItem() {
//     taskList.addEventListener("dblclick", function(event) {
//         const completeItem = document.querySelector(".completed");
//         if (completeItem != null) {
//             completeItem.classList.remove("completed");
//         }
//         event.target.classList.add("completed");
//     });
// };
// completeItem();
function completedStatus() {
    taskList.addEventListener("dblclick", function(event) {
        if (event.target.id !== taskList) {
            if (event.target.classList.contains('completed')) {
              event.target.classList.remove('completed');
            } else { 
                event.target.classList.add('completed'); 
        }
          };
    });
};
completedStatus();