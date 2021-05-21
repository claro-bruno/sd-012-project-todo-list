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
                                  // destaco o apoio e contribuições da colega Alice Goncalves.



list.addEventListener('click', function(event) {           //funcao seleciona elemento 
  const target = event.target;                  // const target recebe event.target
  target.classList.toggle('selected'); 
          
 });


 function tarefaCompletada () {
  
  list.addEventListener('dblclick', (eventComp) => {
  eventComp.target.classList.toggle('completed');
 });
 }
 tarefaCompletada ();
  
 
 
