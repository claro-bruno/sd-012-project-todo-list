const paiBody = document.getElementsByTagName("body")[0];


function addTitle(){
    let title = document.createElement("header");
    title.innerHTML= "Minha Lista de Tarefas";
    paiBody.appendChild(title);
}
addTitle();
