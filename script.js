// - No campo de input será digitado o texto de uma tarefa qualquer e, em seguida, clicar-se-á no botão de criar tarefa. Será verificado que, após o clique, o texto digitado aparece na lista e desaparece do input.

// - A adição de elementos na lista será feita algumas vezes, e será checado se todos os itens criados permanecem na lista na medida em que novos são adicionados

function addLista(){
  let criarTarefa = document.querySelector('#criar-tarefa');
  let listaDeTarefa = document.querySelector('#lista-tarefas');
  criarTarefa.addEventListener('click', function(){
    let textoTarefa = document.querySelector('#texto-tarefa').value;
    let itemLista = document.createElement('li');
    itemLista.innerHTML = textoTarefa
    listaDeTarefa.appendChild(itemLista)
    textoTarefa = document.querySelector('#texto-tarefa').value = '';
  });

}
addLista();