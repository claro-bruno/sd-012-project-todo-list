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
      let adicionaLista = document.createTextNode(lista);
      criaLista.addEventListener('click', mudacor)
      function mudacor(){
         criaLista.className = 'trocaCor';
         trocaCorfundo();
         function trocaCorfundo(){
            let pTarefa = document.querySelectorAll('.trocaCor');
            
            console.log(pTarefa[0])
         }
      }
      criaLista.appendChild(adicionaLista);
      listaTarefa.appendChild(criaLista);
   };
   
};

//resolve requesito 6
function criaTarefa(){
   let minhaListaTarefa = meuInput.value;
   listas.push(minhaListaTarefa);
   meuInput.value = '';
   tarefa()
}

