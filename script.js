const button = document.getElementById('criar-tarefa');
const textoTarefa = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');



function buttonAdd () {
button.addEventListener('click', () => {         //inicia addEventlistener + click    
const newTask = document.createElement('li');  // declara novaTarefa filho de li
  
newTask.innerHTML = textoTarefa.value;  // insere o valor de textoTarefa em newTask
newTask.classList.add('tarefa'); // acrescenta a classe 'tarefa' ao item da lista
list.appendChild(newTask);     // cria lista como filho 
textoTarefa.value  = '';     // o input do textoTarefa é "zerado"
     
});
}
buttonAdd();                       // a funcao é invocada - "invocada mesmo"
 // destaco o apoio e contribuições da colega Alice Goncalves nas duvidas sobre functions e addEventListener



list.addEventListener('click', function(event) {           //funcao seleciona elemento 
const target = event.target;                               // const target recebe event.target
target.classList.toggle('selected'); 
});


function tarefaCompletada () {            //funcao risca tarefa completada
list.addEventListener('dblclick', (eventComp) => {     // addEventListener,com duplo click
eventComp.target.classList.toggle('completed');      // target add classe 'completed'
});
}
tarefaCompletada ();
 



const btnLimpa = document.getElementById('apaga-tudo')   // crio botao limpaTudo

function limpaLista () {                   //crio funcao limpaLista
btnLimpa.addEventListener('click', () => {      // add ao botao o eventlistener
const listaCompleta = document.getElementById('lista-tarefas'); // atribuo a listaCompleta
while ( listaCompleta.hasChildNodes()) {       // filhos de listaCompleta
  listaCompleta.removeChild(listaCompleta.firstChild);    // remove filhos de listaCompleta
    }
  });
}
limpaLista();

const btnrmvfinished = document.getElementById('remover-finalizados');
  
function removeFinalizados () {                           //funcao remove selecionados
btnrmvfinished.addEventListener('click',() => {         //botao recebe eventListener               
const finished = document.querySelectorAll('.completed');  // crio variavel com itens que recebem 'completed'
  for (let index = 0; index < finished.length; index += 1) {    // uso For p/ percorrer 'lista de li'
    list.removeChild(finished[index]);                          //removo todos finished- filhos de list
}
}); 
}
removeFinalizados();     









const bntrmselected = document.getElementById('remove-selecionado');
function removeSelecionados () {
bntrmselected.addEventListener('click',() => {
const selectos = document.querySelectorAll('.selected');
for (let index = 0; index < selectos.length; index += 1) {    // uso For p/ percorrer 'lista de li'
  list.removeChild(selectos[index]);                          //removo todos selected- filhos de list
}
}); 
}
removeSelecionados(); 
























