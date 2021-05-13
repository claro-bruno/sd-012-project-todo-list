//fonte de estudo para esse requesito: https://www.youtube.com/watch?v=k9MKdl5_2yc&ab_channel=Faculdadeiv2
//Requesito 5
let meuInput = document.querySelector('#texto-tarefa');
let meuButao = document.querySelector('#criar-tarefa');
let listaTarefa = document.querySelector('#lista-tarefas');
let listas = [];

meuButao.addEventListener('click', criaTarefa);
function criaTarefa(){
   if ( registraTarefa() > 0){
   let minhaListaTarefa = meuInput.value;
   listas.push(minhaListaTarefa);
   meuInput.value = null;
   };
   tarefa()
};

function registraTarefa(){
   return meuInput.value.length;   
};
//resolve requesito 6
function tarefa(){
   listaTarefa.innerHTML = ''; //limpa os dados, e salva somente dados novos na minha let listas;
   for (lista of listas) {
      let criaLista = document.createElement('li');
      let adicionaLista = document.createTextNode(lista);
      criaLista.className = 'listas'
      criaLista.appendChild(adicionaLista);
      listaTarefa.appendChild(criaLista);
   };
   //resolve requesito 8, auxiliado pela Mentorias técnicas (Gisele Santin) e o colega Euclides Alves(Mostrando esse problema no seu próprio código, onde conseguir tirar como exemplo pro meu)
   let li = document.querySelectorAll('.listas');
   for (index = 0; index < li.length; index +=1){
      li[index].addEventListener('click', mudarCor)
      function mudarCor(){
         for ( index2 = 0; index2 < li.length; index2 += 1){
           li[index2].style.background = 'red';
         }
         event.target.style.background = 'rgb(128, 128, 128)';
      };
   };
};