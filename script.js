function adicionar() {
  document.addEventListener("click", function(btnAdicionar) {
    if (btnAdicionar.target.id === "criar-tarefa") {
        let lista = document.getElementById("lista-tarefas");
        console.log(lista);
        let novaTarefa = document.createElement("li");
        novaTarefa.innerText = "olá";
        lista.appendChild(novaTarefa);
    }
  });
}

adicionar();