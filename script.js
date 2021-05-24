const elementoLista = document.querySelector('#lista-tarefas');
const elementoInput = document.querySelector('#texto-tarefa');
const elementoBotao = document.querySelector('#criar-tarefa');
elementoBotao.addEventListener('click', function(){
  const criaLi = document.createElement('li');
  criaLi.innerText = elementoInput.value;
  elementoLista.appendChild(criaLi);
  elementoInput.value = '';
  criaLi.addEventListener('click', function(){
    criaLi.style.backgroundColor = 'rgb(128, 128, 128)';
  })
});






// requisito 9
function duploClick() {

  let clique = document.getElementById("click-risca");
  let riscarItem = document.getElementsByClassName("completed");
    
  clique.onclick = function(event) {
  event.preventDefault();
  style.getElementsByClassName('completed'); 
 };
 
;}

