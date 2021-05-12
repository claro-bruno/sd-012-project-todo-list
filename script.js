let textTask = document.querySelector('#texto-tarefa');
let listaTarefa = document.querySelector('#lista-tarefas');
let botaoAdd = document.querySelector('#criar-tarefa');

function criarLista (){

    if(textTask.value.length > 0){
        let tarefaLista = document.createElement('li');
        tarefaLista.innerHTML = textTask.value;
        tarefaLista.id = 'list-task';
        listaTarefa.appendChild(tarefaLista); 
        textTask.value = '';
    }
    
};

botaoAdd.addEventListener('click', criarLista);

//Requisito realizado com ajuda do PR do Luciano-Almeida, https://github.com/tryber/sd-012-project-todo-list/pull/71/files
function selecTask(event){
    let select = document.querySelector('.selected');
    if(select === null){
        event.target.classList.add('selected'); //adiciona a classe selected ao elemento do evento atual
        
    }else{
       
        select.classList.remove('selected');
        event.target.classList.add('selected');

    }

}
listaTarefa.addEventListener('click', selecTask);


function selectLineThrough(event){
    //contains verifica se a classe especifica contém no elemento
    if(event.target.classList.contains('completed') !== true){
        event.target.classList.add('completed'); 
        event.target.style.textDecoration = 'line-through';
        
    }else{
       
        event.target.classList.remove('completed');               
        event.target.style.textDecoration = 'none';

    }

}
listaTarefa.addEventListener('dblclick', selectLineThrough);

let botaoApaga = document.querySelector('#apaga-tudo');

function excluir(){
    let apagarLi = document.querySelectorAll('li');

    for(let apaga of apagarLi)
    listaTarefa.removeChild(apaga);

}

botaoApaga.addEventListener('click', excluir);



