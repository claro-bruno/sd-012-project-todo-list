//fonte de estudo para esse requesito: https://www.youtube.com/watch?v=k9MKdl5_2yc&ab_channel=Faculdadeiv2
//Requesito 5
let meuInput = document.querySelector('#texto-tarefa');
let meuButao = document.querySelector('#criar-tarefa');
let listaTarefa = document.querySelector('#lista-tarefas');
let listas = [];

meuButao.addEventListener('click', criaTarefa);
function tarefa(){
   listaTarefa.innerHTML = '';
   for (lista of listas) {
      let criaLista = document.createElement('li');
      let adicionaLista = document.createTextNode(lista)
      criaLista.appendChild(adicionaLista);
      listaTarefa.appendChild(criaLista);
      
   };
};
function criaTarefa(){
   let minhaListaTarefa = meuInput.value;
   listas.push(minhaListaTarefa);
   meuInput.value = '';
   console.log(listas)
   tarefa()
}
