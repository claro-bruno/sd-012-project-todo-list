window.onload = function(){
let button = document.getElementById("criar-tarefa");
let assignmentList = document.querySelector("#lista-tarefas");

function addList(){
    button.addEventListener('click', addAssignment)
};

function addAssignment(){
    let input = document.querySelector("#texto-tarefa").value;
    
    let assignment = document.createElement('li');
    assignment.innerText = input;

    assignmentList.appendChild(assignment);

    document.querySelector("#texto-tarefa").value = "";    
    
};

addList();

};


