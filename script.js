const button = document.getElementById('criar-tarefa');
const textoTarefa = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');




function buttonAdd () {
button.addEventListener('click', () => {         //inicia addEventlistener + click    
const newTask = document.createElement('li');  // declara novaTarefa filho de li
newTask.addEventListener('click', selectedOne); 
newTask.innerHTML = textoTarefa.value;  // insere o valor de textoTarefa em newTask
newTask.classList.add('tarefa'); // acrescenta a classe 'tarefa' ao item da lista

list.appendChild(newTask);     // cria lista como filho 
textoTarefa.value  = '';     // o input do textoTarefa é "zerado"
     
});
}
buttonAdd();                       // a funcao é invocada - "é invocada mesmo"
 // destaco o apoio e contribuições da colega Alice Goncalves nas duvidas sobre functions e button.addEventListener
 

function selectedOne  (event) {
const onlySelected = event.target;                                               // ressalto as contribuições do colega Gabriel Bueno.
  for ( let index=0; index < childs.length; index += 1) {
    childs[index].classList.remove('selected');
  }
  onlySelected.classList.add('selected');    
}
 const childs = document.getElementsByClassName('tarefa');
    

function tarefaCompletada () {            //funcao risca tarefa completada
list.addEventListener('dblclick', (eventComp) => {     // addEventListener,com duplo click
eventComp.target.classList.toggle('completed');      // target add classe 'completed'
});
}
tarefaCompletada ();
 

const btnLimpa = document.getElementById('apaga-tudo')   // crio botao limpaTudo

function limpaLista () {                   //crio funcao limpaLista
btnLimpa.addEventListener('click', () => {      // add ao botao o eventlistener
const list = document.getElementById('lista-tarefas'); // atribuo a listaCompleta
while ( list.hasChildNodes()) {       // filhos de listaCompleta
  list.removeChild(list.firstChild);    // remove filhos de listaCompleta
    }
  });
}
limpaLista();

const btnrmvfinished = document.getElementById('remover-finalizados');
  
function removeFinalizados () {                           //funcao remove finalizados
btnrmvfinished.addEventListener('click',() => {         //botao recebe eventListener               
const finished = document.querySelectorAll('.completed');  // crio variavel com itens que recebem 'completed'
  for (let index = 0; index < finished.length; index += 1) {    // uso For p/ percorrer 'lista de li'
    list.removeChild(finished[index]);                          //removo todos finished- filhos de list
}
}); 
}
removeFinalizados();     

const bntrmselected = document.getElementById('remover-selecionado');
function removeSelecionados () {
bntrmselected.addEventListener('click',() => {
const selectos = document.querySelectorAll('.selected');
for (let index = 0; index < selectos.length; index += 1) {    // uso For p/ percorrer 'lista de li'
  list.removeChild(selectos[index]);                          //removo todos selected- filhos de list
}
}); 
}
removeSelecionados(); 

let tasksSaved = document.getElementById('salvar-tarefas');  //crio botao salvar tareda-id salvar tarefa
list.innerHTML = localStorage.getItem("childs")              //guardo list no LS / atribuo chave,childs
tasksSaved.addEventListener('click', function () {            //
localStorage.setItem("childs", list.innerHTML);
}) 


const btnMoveUp = document.getElementById('mover-cima');
btnMoveUp.addEventListener('click', moveUp);

function moveUp() {
  const selection = list.querySelector('.selected');    // crio variavel selection= captura itens com a classe 'selected'
  if (selection && selection.previousElementSibling) {    // 
    const another = selection.previousElementSibling;
    const parent = selection.parentNode;           // atraves de parentNode, especifico o irmão anterior da lista 'li'
    parent.insertBefore(selection, another);
  }
}

const btnMoveDown = document.getElementById('mover-baixo');
btnMoveDown.addEventListener('click', moveDown);

function moveDown() {
  const selection = list.querySelector('.selected');
  if (selection && selection.nextElementSibling) {
    const next = selection.nextElementSibling;
    const parent = selection.parentNode;
    parent.insertBefore(next, selection);
  }
}



