let input = document.getElementById("texto-tarefa");
let listaTarefa = document.getElementById("lista-tarefas");
let button = document.getElementById("criar-tarefa");

function alteraFundoLista(event){

    let listaSelecionada = document.querySelector(".selected")
    if (listaSelecionada){
    listaSelecionada.classList.remove("selected");
    listaSelecionada.style.backgroundColor = "";
    }
    
    event.target.classList.add("selected");
    event.target.style.backgroundColor = "rgb(128, 128, 128)";
    
};
function criarElementosLista(){
    let novaTarefa = document.createElement("li");
    novaTarefa.classList.add("tarefa-lista");
    novaTarefa.innerHTML = input.value;
    document.querySelector("#lista-tarefas").appendChild(novaTarefa);
    novaTarefa.addEventListener("click", alteraFundoLista);

};

function limpaInput(){
    input.value = "";
};

function funcaoBotao(){
    criarElementosLista();
    limpaInput();
};

button.addEventListener("click", funcaoBotao);