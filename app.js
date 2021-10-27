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

})


renderView = () => {

    container.innerHTML = '';
    let render = ``;


    Tasks.forEach(({id, taskName}, index) => {
        render += `
           <div id="${id}">
            <div>${taskName}</div>
            <button class="dltButton" id="${index+1}">X</button>
           </div>
        `
        return render;
    })
    container.insertAdjacentHTML("beforeend", render)
    deleteTask()
}



const deleteTask = (index) => {
    const deleteButtons = [...document.querySelectorAll('.dltButton')];
    console.log(deleteButtons)
    deleteButtons.forEach((deleteButton) => {
        deleteButton.addEventListener('click', () => {
            Tasks.splice(deleteButton.id-1, 1);
            renderView();
        })
    })


}



