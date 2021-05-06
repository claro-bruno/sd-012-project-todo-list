let addButton = document.getElementById("criar-tarefa");
let taskList = document.getElementById("lista-tarefas");
let inputText = document.getElementById("texto-tarefa");
let removeAllTasks = document.getElementById('apaga-tudo');

addButton.addEventListener("click", function () {
    let createList = document.createElement("li");
    createList.classList.add("create-list");
    createList.innerText = inputText.value;
    inputText.value = "";
    taskList.appendChild(createList);

    createList.addEventListener("dblclick", function (event) {
        if (event.target.classList.contains('completed')) {
            event.target.classList.remove('completed');
        } else {
            event.target.classList.add('completed');
        }

       });  
    })

    function backgroundGreyItem() {
        taskList.addEventListener('click', function(event) {
          const selectedItem = document.querySelector('.grey');
          if (selectedItem != undefined) {
          selectedItem.classList.remove('grey');
          }
          event.target.classList.add('grey');
        });
      }
      backgroundGreyItem();

function removeTasks(){
    removeAllTasks.addEventListener('click', function(){
        taskList.innerHTML = '';
    })
};
removeTasks();
