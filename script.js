const toDoList = [''];

const selecteIten = document.getElementById('lista-tarefas');

const textInput = document.querySelector('#texto-tarefa');

const buttonCreate = document.querySelector('.submit');

const buttonRmvSelected = document.getElementById('remover-finalizados')

const buttonRemoveAll = document.getElementById('apaga-tudo')

buttonCreate.addEventListener('click', function (e) {
  if (textInput.value !== ''){
    const text = textInput.value;
    const createLi = document.createElement('li');
    createLi.className = 'task';
    createLi.innerHTML = text;
    selecteIten.appendChild(createLi);
    document.getElementById('texto-tarefa').value = null;
  } else {
    alert('Adicione alguma tarefa!')
  }
});

textInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter'){
    let selecteIten = document.getElementById('lista-tarefas');
    const text = textInput.value;
    const createLi = document.createElement('li');
    createLi.className = 'task';
    createLi.innerHTML = text;
    selecteIten.appendChild(createLi);
    document.getElementById('texto-tarefa').value = null;
  }
})

buttonRemoveAll.addEventListener('click', function() {
    selecteIten.innerHTML = '';
})


selecteIten.addEventListener('click', function (event) {
  let taskIten = document.getElementsByClassName('task');
  for ( let index = 0; index < taskIten.length; index +=1){
    taskIten[index].classList.remove('task-selected');
  }
  event.target.classList.add('task-selected');
});

selecteIten.addEventListener('dblclick', function (event) {
  for (let key in selecteIten){
    if(event.target.classList.value.includes('completed')){
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  }
});




buttonRmvSelected.addEventListener('click',function(event) {
  const taskCompleted = document.querySelectorAll('.completed');
  for (let index = 0; index < taskCompleted.length; index += 1){
  taskCompleted[index].remove();
  };
});
