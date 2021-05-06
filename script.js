//  caminhos
let caminhoBtn = document.getElementById("criar-tarefa");
let caminhoImput = document.getElementById("texto-tarefa");
let caminhoLista = document.getElementById("lista-tarefas");
let apagaBtn = document.getElementById("apaga-tudo");

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

//  função adiciona classe completed na tarefa
function addCompleted (event){
    if(event.target.classList.contains("completed") === true){
        event.target.classList.remove("completed"); 
    }else {
        event.target.classList.add("completed");
    };
};

//  funções de adiciona tarefa e limpa imput
function addTarefa (){
    let caixaTarefa = document.createElement("li");
    caixaTarefa.className = "tarefa";
    caixaTarefa.innerText = caminhoImput.value;
    caminhoLista.appendChild(caixaTarefa);
    //  adiciona eventlistener na tarefa 
    caixaTarefa.addEventListener("click", mudaFundoSeleciona);
    caixaTarefa.addEventListener("dblclick", addCompleted);
};

function limpaImput(){
    caminhoImput.value = "";
};

//  função que adiciona tarefa e limpa imput
function clicaBtn(){
    addTarefa();
    limpaImput();
};

//  adiciona eventlistener no botão adiciona tarefa
caminhoBtn.addEventListener("click", clicaBtn);

//  adiciona eventlistener com função no botão apaga-tudo

apagaBtn.addEventListener("click", function (){
    caminhoLista.innerHTML = "";
});
