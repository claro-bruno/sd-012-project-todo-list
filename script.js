//  caminhos
let caminhoBtn = document.getElementById("criar-tarefa");
let caminhoImput = document.getElementById("texto-tarefa");
let caminhoLista = document.getElementById("lista-tarefas");

//  função que adiciona tarefa e limpa imput
function addTarefa (){
    let caixaTarefa = document.createElement("li");
    caixaTarefa.className = "tarefa";
    caixaTarefa.innerText = caminhoImput.value;
    caminhoLista.appendChild(caixaTarefa);
};

function limpaImput(){
    caminhoImput.value = "";
};

function clicaBtn(){
    addTarefa();
    limpaImput();
};

//adiciona eventlistener no botão
caminhoBtn.addEventListener("click", clicaBtn);
