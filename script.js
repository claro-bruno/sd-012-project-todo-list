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
      let itens = document.getElementsByClassName("item");
      let finalizados = document.getElementsByClassName("completed");
      let index = 0;
      while (index <= itens.length) {
        listaToda.removeChild(finalizados[0]);
        index += 1;
      }
    // for (let index = 0; index < itens.length; index += 1) {
    //   if (itens[index].className === "item completed") {
    //     listaToda.removeChild(itens[index]);
    //   }
    // }
    }
  });
}

function salvaLista() {
  document.addEventListener("click", function(salva) {
    if (salva.target.id === "salvar-tarefas") {
      let lista = document.getElementById("lista-lugar");
      localStorage.setItem("item", lista.innerHTML);
      console.log(lista);
    }
  });
}

window.onload = function() {
  let isLista = document.getElementById("lista-lugar");     
  isLista.innerHTML = localStorage.getItem("item");
  console.log(isLista); 
  
  risco();
  adicionar();
  corCinza();
  apagaTudo();
  rmFinalizados();
  salvaLista();

}