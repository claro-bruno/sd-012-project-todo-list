// const toDoObjectList = [];
// class toDoClass {
//   constructor(item) {
//     this.olElement = item;
//   }
//   add() {
//     const toDoInput = document.querySelector('#texto-tarefa').value;
//     if (toDoInput === '') {
//       alert('Você não digitou nada');
//     } else {
//       const toDoObject = {
//         id: toDoObjectList.length,
//         todoText: toDoInput,
//         isDone: false,
//       }
//       toDoObjectList.unshift(toDoObject);
//       this.display();
//       document.querySelector('texto-tarefa').value = '';
//     }
//   }

//   done_undone(x) {
//     const selectedToDoIndex = toDoObjectList.findIndex((item) => item.id === x);
//     console.log(toDoObjectList[selectedToDoIndex].isDone);
//     toDoObjectList[selectedToDoIndex].isDone == false ? toDoObjectList[selectedToDoIndex].isDone = true : toDoObjectList[selectedToDoIndex].isDone = false;
//     this.display();
//   }

//   deleteElement(z) {
//     const selectedToDelIndex = toDoObjectList.findIndex((item) => item.id == z);
//     toDoObjectList.splice(selectedToDelIndex, 1);
//     this.display();
//   }

//   display() {
//     this.olElement.innerHTML = '';
//     toDoObjectList.forEach((object_item) => {
//       const liElement = document.createElement('li');
//       const delBtn = document.createElement('i');

//       liElement.innerText = object_item.todoText;
//       liElement.setAttribute('data-id', object_item.id);

//       delBtn.setAttribute('data-id', object_item.id);
//       delBtn.classList.add('far', 'far-trash-alt');

//       liElement.appendChild(delBtn);

//       delBtn.addEventListener('click', function (e) {
//         const deleteId = e.target.getAttribute('data-id');
//         minhaLista.deleteElement(deleteId);
//       })

//       liElement.addEventListener('click', function (e) {
//         const selectedId = e.target.getAttribute('data-id');
//         minhaLista.done_undone(selectedId);
//       })

//       if (object_item.isDone) {
//         liElement.classList.add('checked');
//       }
//       this.olElement.appendChild(liElement);
//     })
//   }

// }
// const listSection = document.querySelector('lista-tarefas');
// minhaLista = new toDoClass(listSection);
// document.querySelector('#criar-tarefa').addEventListener('click', function () {
//   minhaLista.add();
// });


const elementoLista = document.querySelector('#lista-tarefas');
const elementoInput = document.querySelector('#texto-tarefa');
const elementoBotao = document.querySelector('#criar-tarefa');

function mostraTarefas (){
  for(tarefa of tarefas){
    const elementoTarefa = document.createElement('li');
    const 
  }
}