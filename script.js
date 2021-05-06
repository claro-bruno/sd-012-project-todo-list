function adicionar() {
  document.addEventListener("click", function(btnAdicionar) {
    if (btnAdicionar.target.id === "criar-tarefa") {
        let lista = document.getElementById("lista-tarefas");
        let novaTarefa = document.createElement("li");
        let textoTarefa = document.getElementById("texto-tarefa");
        let tarefaValor = textoTarefa.value;
        novaTarefa.className = "item";
        novaTarefa.innerText = tarefaValor;
        lista.appendChild(novaTarefa);
        textoTarefa.value = "";
    }
  });
}

function corCinza() {
  document.addEventListener("click", function(mudaCor) {
    if (mudaCor.target.className === "item") {
        let todosItens = document.getElementsByClassName("item");
        for (let index = 0; index < todosItens.length; index += 1) {
          todosItens[index].style.backgroundColor = "";
        }
        mudaCor.target.style.backgroundColor = "gray";
    }
  });
}

function risco() {
  document.addEventListener("dblclick", function(isRiscado) {
    if (isRiscado.target.className === "item") {
      if (isRiscado.target.className === "item") {
        isRiscado.target.className = "item completed";
        return;
      }
    }
    if (isRiscado.target.className === "item completed") {
        isRiscado.target.className = "item";
        return;
    }
  });
}

function apagaTudo() {
  document.addEventListener("click", function(apagaLista) {
    if (apagaLista.target.id === "apaga-tudo") {
      let lista = document.getElementById("lista-tarefas");
      lista.innerHTML = "";
    }    
  });
}

function rmFinalizados() {
  document.addEventListener("click", function(remover) {
    if (remover.target.id === "remover-finalizados") {
      let listaToda = document.getElementById("lista-tarefas");
      let finalizados = document.getElementsByClassName("item");
      for (let index = 0; index < finalizados.length; index += 1) {
          if (finalizados[index].className === "item completed") {
            listaToda.removeChild(finalizados[index]);
          }
      }
    }
  });
}

risco();
adicionar();
corCinza();
apagaTudo();
rmFinalizados();