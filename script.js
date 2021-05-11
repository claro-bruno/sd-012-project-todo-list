window.onload = function(){
let button = document.getElementById("criar-tarefa");
let assignmentList = document.querySelector("#lista-tarefas");
let lista = document.getElementsByClassName("tarefa");
let selected = document.createAttribute("class");
selected.value = "selected";

function addList(){
    button.addEventListener('click', addAssignment)
};

function addAssignment(){
    let input = document.querySelector("#texto-tarefa").value;
    
    let assignment = document.createElement("li");
    assignment.innerText = input;
    assignment.classList.add("tarefa");
    assignment.classList.add("selected");
    assignmentList.appendChild(assignment);

    document.querySelector("#texto-tarefa").value = "";    
    
};

function changeBackground(){
    assignmentList.addEventListener('click', function(event){
        selected = document.querySelector(".selected");
        selected.classList.remove('selected');
        event.target.classList.add('selected');
        
        for (let index = 0; index < lista.length; index += 1){
            lista[index].style.backgroundColor = "white";
        };
    
        for(let index = 0; index < lista.length; index += 1){
            if(lista[index].classList.contains('selected')){
                event.target.style.backgroundColor = "rgb(128, 128, 128)";
            };
        };
    });
    
};

addList();
changeBackground();

};


