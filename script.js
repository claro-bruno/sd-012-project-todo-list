window.onload = function () {
  let titulo = document.createElement("header");
  titulo.innerHTML = "Minha Lista de Tarefas";
  document.body.appendChild(titulo);

  let text = document.createElement("p");
  text.innerHTML = "Clique duas vezes em um item para marcá-lo como completo";
  text.id = "funcionamento";
  document.body.appendChild(text);

  let textBox = document.createElement("input");
  textBox.id = "texto-tarefa";
  textBox.type = "text";
  document.body.appendChild(textBox);

  let lista = document.createElement("ol");
  lista.id = "lista-tarefas";
  document.body.appendChild(lista);

  let botao = document.createElement("button")
  botao.id = "criar-tarefa";
  document.body.appendChild(botao);

  document.body.addEventListener("click", function (event) {
    let tarefa = document.querySelector("#texto-tarefa").value;
    if ((event.target.id === "criar-tarefa") && (tarefa != "")) {
      let item = document.createElement("li");
      item.className = "item";
      item.innerText = tarefa;
      lista.appendChild(item);
      document.querySelector("#texto-tarefa").value = "";
    }
  })

  document.body.addEventListener("click", function (event) {
    if (event.target.className === "item") {
      let changeColor = event.target;
      changeColor.style.backgroundColor = "rgb(128, 128, 128)";
    }
  })

};
