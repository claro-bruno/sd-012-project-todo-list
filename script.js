function adicionar() {
  document.addEventListener("click", function(btnAdicionar) {
    if (btnAdicionar.target.id === "criar-tarefa") {
        let lista = document.getElementById("lista-tarefas");
        let novaTarefa = document.createElement("li");
        let textoTarefa = document.getElementById("texto-tarefa");
        let tarefaValor = textoTarefa.value;
        novaTarefa.innerText = tarefaValor;
        lista.appendChild(novaTarefa);
        textoTarefa.value = "";
    }
  });
}

adicionar();