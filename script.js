const paiBody = document.getElementsByTagName("body")[0];




function addTitle(){
    let title = document.createElement("header");
    title.innerHTML = "Minha Lista de Tarefas";
    paiBody.appendChild(title);
}
addTitle();

function addDiscretP(){
    let p = document.createElement("p");
    p.innerHTML = "Clique duas vezes em um item para marcá-lo como completo";
    p.id = "funcionamento";
    paiBody.appendChild(p);
}