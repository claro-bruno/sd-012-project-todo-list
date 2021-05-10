let adicionar = document.getElementById('criar-tarefa'); 

adicionar.addEventListener('click', addElement);

function addElement() {
    createList.innerHTML += "<li>" + colocaTarefa.value + "</li>";
    console.log(colocaTarefa.value);
};
// utilizar esta estrutura para ser usada em todas os botoes

let createList = document.getElementById('lista-tarefas');
let colocaTarefa = document.getElementById('texto-tarefa');
