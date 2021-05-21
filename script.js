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


 function tarefaCompletada () {            //funcao risca tarefa completada
  
  list.addEventListener('dblclick', (eventComp) => {     // addEventListener,com duplo click
  eventComp.target.classList.toggle('completed');      // target add classe 'completed'
 });
 }
 tarefaCompletada ();

 
 
const btnLimpa = document.getElementById('apaga-tudo')   // crio botao limpaTudo
function limpaLista () {
btnLimpa.addEventListener('click', () => {
const listaCompleta = document.getElementById('lista-tarefas'); // atribuo a listaCompleta
while ( listaCompleta.hasChildNodes()) {       // filhos de listaCompleta
  listaCompleta.removeChild(listaCompleta.firstChild);    // remove filhos de listaCompleta
    }
  });
}
limpaLista();


 
 
