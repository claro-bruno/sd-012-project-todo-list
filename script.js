let ul = document.createElement("ul");
document.body.appendChild(ul);

for (let index = 1; index <= 10; index +=1)
{
    let li = document.createElement("li");  
    li.className = "file";

    var a = document.createElement("a");
    a.innerHTML = "Subfile " + i;

    li.appendChild(a);
    ul.appendChild(li);
}

//criar uma funcao pro valor do input, inserir o li na ol 
//if a pessoa clicar no botao e nao tiver nada dentro return msg de rro
//aplicar o evento de clique no botao, aplicar neles