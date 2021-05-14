//Será criado uma lista após o usuário preencher o campo e clicar no botão 
const createTask = document.querySelector('#criar-tarefa');
const listTask = document.querySelector('#lista-tarefas');

function list () {
    createTask.addEventListener('click', function(){
        let textTask = document.querySelector('#texto-tarefa').value;
        let listItem = document.createElement('li');
        listItem.innerHTML = textTask;
        listItem.className = 'topics'
        listItem.addEventListener('click', changeColor)
        listItem,addEventListener('dblclick', listComplete)
        listTask.appendChild(listItem);
        textTask = document.querySelector('#texto-tarefa').value = '';

    })
}
list ();

function changeColor (event){
    let listItem = document.querySelectorAll('topics')
    for(let index = 0; index < listItem.length; index += 1) {
        if (listItem[index].id === 'selected')
        listItem[index].id = ''
        else
        event.target.id = 'selected'
    }
}

changeColor();

//Risca tarefa completada
function listComplete(event){


    if(event.target.className.includes('completed'))
      event.target.className = 'item-lista'
    else
    event.target.className  = ' completed'
  }

//Botão apagar
  const clear = document.querySelector('#apaga-tudo');
  function clearAll() {
    clear.addEventListener('click', () => {
      listTask.innerHTML = '';
    });
  }
  clearAll();
  

  //Botão Remover finalizados
  const clearEnd = document.querySelector('#remover-finalizados');
  const completed = document.getElementsByClassName('completed');
  function deleteEnd() {
    clearEnd.addEventListener('click', () => {
      console.log('complete');
      for (let index = completed.length - 1; index >= 0; index -= 1) {
        completed[index].remove();
      }
    })
  }
  deleteEnd();
 


