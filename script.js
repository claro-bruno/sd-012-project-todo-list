let textTask = document.querySelector('#texto-tarefa');
let listaTarefa = document.querySelector('#lista-tarefas');
let botaoAdd = document.querySelector('#criar-tarefa');

function criarLista (){

    if(textTask.value.length > 0){
        let tarefaLista = document.createElement('li');
        tarefaLista.innerHTML = textTask.value;
        listaTarefa.appendChild(tarefaLista); 
        textTask.value = '';
    }
    
};

botaoAdd.addEventListener('click', criarLista);


//https://api.jquery.com/keyup/