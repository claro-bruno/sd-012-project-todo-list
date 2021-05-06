//  caminhos
let caminhoBtn = document.getElementById("criar-tarefa");
let caminhoImput = document.getElementById("texto-tarefa");
let caminhoLista = document.getElementById("lista-tarefas");

// função que muda o backgroundColor de tarefa e seleciona
function mudaFundoSeleciona(event){
    let velhoClick = document.querySelector(".selected");

    if (velhoClick){
        velhoClick.style.backgroundColor = "";
        velhoClick.classList.remove("selected");
    };

    event.target.style.backgroundColor = "rgb(128,128,128)";
    event.target.classList.add("selected");
};

//  funções de adiciona tarefa e limpa imput
function addTarefa (){
    let caixaTarefa = document.createElement("li");
    caixaTarefa.className = "tarefa";
    caixaTarefa.innerText = caminhoImput.value;
    caminhoLista.appendChild(caixaTarefa);
    caixaTarefa.addEventListener("click", mudaFundoSeleciona); //  adiciona eventlistener na tarefa 
};

function limpaImput(){
    caminhoImput.value = "";
};

//  função que adiciona tarefa e limpa imput
function clicaBtn(){
    addTarefa();
    limpaImput();
};

//adiciona eventlistener no botão
caminhoBtn.addEventListener("click", clicaBtn);
