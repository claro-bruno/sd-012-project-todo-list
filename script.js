window.onload = function(){
let button = document.getElementById("criar-tarefa");
let assignmentList = document.querySelector("#lista-tarefas");
let lista = document.getElementsByClassName("tarefa");
let apagar = document.getElementById("apaga-tudo");

function addList(){
    button.addEventListener('click', function() {
    let input = document.querySelector("#texto-tarefa").value;

    let assignment = document.createElement("li");
    assignment.innerText = input;
    assignment.classList.add("tarefa");
    assignmentList.appendChild(assignment);
   document.querySelector("#texto-tarefa").value = "";        
});
};



function changeBackground(){
    assignmentList.addEventListener('click', function(event){
        let selected = document.querySelectorAll('.selected');      
        if(event.target.classList.contains('selected')){
            for (let index = 0; index < lista.length; index += 1){
                event.target.classList.remove('selected');
            };
        } else if (selected.length > 0){
            for (let index = 0; index < lista.length; index += 1){
            lista[index].classList.remove('selected');
            };
            for(let index = 0; index < lista.length; index += 1){
                event.target.classList.add('selected');
            };

        } else {
            for(let index = 0; index < lista.length; index += 1){
                event.target.classList.add('selected');
            };
        };
    });
};

function lineThrough(){
    assignmentList.addEventListener('dblclick', function(event){
        let completed = document.querySelectorAll('.completed');      
        if(event.target.classList.contains('completed')){
            for (let index = 0; index < lista.length; index += 1){
                event.target.classList.remove('completed');
            };
        } else if (completed.length > 0){
            for (let index = 0; index < lista.length; index += 1){
            lista[index].classList.remove('completed');
            };
            for(let index = 0; index < lista.length; index += 1){
                event.target.classList.add('completed');
            };

        } else {
            for(let index = 0; index < lista.length; index += 1){
                event.target.classList.add('completed');
            };
        };
    });
};

function apagaTudo(){
    apagar.addEventListener('click', function(){
        let father = document.getElementById('lista-tarefas');
        
        for(let index = lista.length -1; index >= 0; index -= 1){
            father.removeChild(lista[index]);
        };
    })

};


addList();
changeBackground();
lineThrough();
apagaTudo();

};


