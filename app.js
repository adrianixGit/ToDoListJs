const inputText = document.querySelector('.inputText');
const addButton = document.querySelector('.add');
const container = document.querySelector('.container');

const Tasks = [];

let inputValue;
let id = 0;

inputText.addEventListener('input', (e) => {
  inputValue = e.target.value;
})

addButton.addEventListener('click', (e) => {
    e.preventDefault();
    if(!inputValue) return;
    id++;

    Tasks.push({
        id:id,
        taskName:inputValue,
    })

    renderView();
    console.log(Tasks);
})


renderView = () => {

    let render;
    const ul = document.createElement('ul');

    Tasks.map(({id, taskName}) => {
        ul.innerHTML = '';
         const li = document.createElement('li')
        li.innerHTML = `${taskName}` + `<button class="deleteButton">Usuń</button>`;
         ul.appendChild(li);
    })
    container.appendChild(ul);
    deleteTask(id);
}


deleteTask = (id) => {
    const deleteButtons = [...document.querySelectorAll('.deleteButton')];
    deleteButtons.forEach((deleteButton) => {
        deleteButton.addEventListener('click', () => {
            console.log('siemka')
        })
    })pastylka


}



