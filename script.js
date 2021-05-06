window.onload = function () {
//   document.addEventListener('click', (event) => {
//     console.log(event.target.id == 'criar-tarefa')
//       if (event.target.id === 'criar-tarefa') {
//         let input = document.querySelector("#texto-tarefa").value; 
//         let li = document.createElement('li');
//         li.classList.add('itemList');
//         let ol = document.querySelector('#lista-tarefas');
//         li.innerHTML = input;
//         ol.appendChild(li);
        
//       }
//   }, false);

    const addTarefa = document.getElementById('criar-tarefa');
    addTarefa.addEventListener('click', function () {
    const input = document.getElementById('texto-tarefa');
    console.log(input.value);
    let li = document.createElement('li');
    li.classList.add('itemList');
    let ol = document.getElementById('lista-tarefas');
    li.innerHTML = input.value;
    ol.appendChild(li);
    input.value = '';
  })

}
