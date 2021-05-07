let input = document.getElementById("texto-tarefa");
let listaTarefa = document.getElementById("lista-tarefas");
let button = document.getElementById("criar-tarefa");
let buttonErase = document.getElementById("apaga-tudo");

function alteraFundoLista(event){

    let listaSelecionada = document.querySelector(".selected")
    if (listaSelecionada){
    listaSelecionada.classList.remove("selected");
    listaSelecionada.style.backgroundColor = "";
    }
    
    event.target.classList.add("selected");
    event.target.style.backgroundColor = "rgb(128, 128, 128)";
    
};
function riscaElemento(event){
    if (!event.target.classList.contains("completed")) {
        event.target.classList.add("completed");
    } else {
        event.target.classList.remove("completed");
    };
};

function criarElementosLista(){
    let novaTarefa = document.createElement("li");
    novaTarefa.classList.add("tarefa-lista");
    novaTarefa.innerHTML = input.value;
    document.querySelector("#lista-tarefas").appendChild(novaTarefa);
    novaTarefa.addEventListener("click", alteraFundoLista);
    novaTarefa.addEventListener("dblclick", riscaElemento);

};

function limpaInput(){
    input.value = "";
};

function funcaoBotao(){
    criarElementosLista();
    limpaInput();
};

button.addEventListener("click", funcaoBotao);


function limpaLista (){
    let listaTarefa = document.getElementById("lista-tarefas");
    while (listaTarefa.firstChild){
        listaTarefa.removeChild(listaTarefa.firstChild);
    };
};


function funcaoBotaoApaga(){
    limpaLista();
};

buttonErase.addEventListener("click", funcaoBotaoApaga);