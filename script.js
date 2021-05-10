window.onload = function () {
  let titulo = document.createElement("header");
  titulo.innerHTML = "Minha Lista de Tarefas";
  document.body.appendChild(titulo);

  let text = document.createElement("p");
  text.innerHTML = "Clique duas vezes em um item para marcá-lo como completo";
  text.id = "funcionamento";
  document.body.appendChild(text);
  
};
