function adicionaLista() {
let criaTarefa = document.getElementById('texto-tarefa').value;
let lista = document.getElementById('lista-tarefas').innerHTML;

lista += "<li>" +criaTarefa+ "</li>"
document.getElementById('lista-tarefas').innerHTML = lista;
document.getElementById('texto-tarefa').value = null;
}
// https://www.youtube.com/watch?v=pRwxgtqImZQ