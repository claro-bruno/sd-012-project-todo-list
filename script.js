// Requisitos 5 e 6
function inputNewTask() {
  const getTextInput = document.getElementById('texto-tarefa');
  const clickButton = document.getElementById('criar-tarefa');
  const getTaskListLo = document.getElementById('lista-tarefas');
  
  clickButton.addEventListener('click', function() {
  const newLi = document.createElement('li');
  newLi.innerText = getTextInput.value;
  newLi.addEventListener('click', clickNoLi); //evento de clique no li
  newLi.classList.add('li-estilo');
  getTaskListLo.appendChild(newLi);
  getTextInput.value = '';
  });
  }
  inputNewTask();
  // // Requisito 7 - Clicar em um item da lista deve alterar 
  // // a cor de fundo do item para cinza rgb(128,128,128)
function clickNoLi(event) {
  const objetoAlvo = event.target.style.backgroundColor;
  event.target.style.backgroundColor = 'rgb(128,128,128)';
  console.log('Olá')
}
  
  // function setDayColor() {
  //   let selectedTask = document.getElementsByClassName('task selected');
  //   let days = document.querySelector('#days');
  //   let taskDiv = document.querySelector('.task');
  //   let taskColor = taskDiv.style.backgroundColor;
    
  //   days.addEventListener('click', function(event){
  //     let eventTargetColor = event.target.style.color;
  //     if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
  //       let color = selectedTask[0].style.backgroundColor;
  //       event.target.style.color = color;
  //     } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
  //       event.target.style.color = 'rgb(119,119,119)';
  //     }
  //   });
  // };
  
  // setDayColor();