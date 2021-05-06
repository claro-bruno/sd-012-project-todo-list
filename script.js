function title(string) {
    let title = document.querySelector('h1');
    title.innerHTML = string;
}

title('Minha Lista de Tarefas');

function instructionText(string) {
    let instructions = document.getElementById('funcionamento');
    instructions.innerHTML = string;
}

instructionText('Clique duas vezes em um item para marcá-lo como completo');

