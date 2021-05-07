const listaTarefas = document.getElementById('lista-tarefas');
const inputTexto = document.getElementById('texto-tarefa');
const criarTarefa = document.getElementById('criar-tarefa');
const task = document.getElementsByTagName('li');


function createLi(){
    criarTarefa.addEventListener('click', () => {
        const criarLista = document.createElement('li');
        criarLista.className = 'task';
        criarLista.innerHTML = inputTexto.value;
        listaTarefas.appendChild(criarLista);
        inputTexto.value = '';
    })
};
createLi();

function backgroundColor() {
    listaTarefas.addEventListener('click', (event) => {
      const classSelected = document.querySelector('.selected');
      if (classSelected) {
        classSelected.classList.remove('selected');
      }
      event.target.classList.add('selected');
    });
  }
  backgroundColor();

function lineThrough (){
    listaTarefas.addEventListener('dblclick', (evt) => {
        const completado = document.querySelector('.completed')
        if (completado) {
            completado.classList.remove('completed')
        }
        evt.target.classList.add('completed')
    })
}
lineThrough();