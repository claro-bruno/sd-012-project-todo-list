const form = document.getElementById("form");
const ol = document.getElementById("lista-tarefas");
const botao = document.getElementById("criar-tarefa");

botao.addEventListener("click", (e) => {
  e.preventDefault();

  let input = document.getElementById("texto-tarefa");
  let listaOrganizada = document.createElement("li");
	listaOrganizada.innerHTML = input.value
  ol.appendChild(listaOrganizada);

  input.value = ""

listaOrganizada.addEventListener("dblclick", () => {
  listaOrganizada.classList.toggle('completed');
});
  ol.appendChild(listaOrganizada);
  input.value = ""
})