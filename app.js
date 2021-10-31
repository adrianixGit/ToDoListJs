const inputText = document.querySelector('.inputText');
const addButton = document.querySelector('.add');
const container = document.querySelector('.container');
const category = document.querySelector('.category');
const btnFilter = document.querySelector('.btnFilter');
const categoryValueInput = document.querySelector('.categoryValueInput');

const tasks = [];

let inputValue;
let categoryValue;
let filterInputValue;
let id = 0;

inputText.addEventListener('input', (e) => {
  inputValue = e.target.value;
})

///////Adding values to array///////////

addButton.addEventListener('click', (e) => {
    e.preventDefault();
    if(!inputValue) return;
    id++;
    categoryValue = category.options[category.selectedIndex].text;

    tasks.push({
        id:id,
        taskName:inputValue,
        taskCategory: categoryValue,
    })

    console.log(tasks)
    renderView(tasks);

})

//////Render Views////////////

renderView = (arr) => {

    container.innerHTML = '';
    let render = ``;


    arr.forEach(({id, taskName, taskCategory}, index) => {
        render += `
           <div id="task-${id}">
            <div>${taskName}</div>
            <p>${taskCategory}</p>
            <button class="dltButton" onclick="deleteTask(${id})">X</button>
           </div>
        `
        return render;
    })
    container.insertAdjacentHTML("beforeend", render)

}

///////Delete Task/////////

const deleteTask = (id) => {
   const index = tasks.findIndex((task) => task.id === id)
    tasks.splice(index, 1);
   console.log(tasks)
    renderView(tasks);

}

//////////////////Filter/////////////

categoryValueInput.addEventListener('input', (e) => {
    filterInputValue = (e.target.value);
})


btnFilter.addEventListener('click', (e) => {
    e.preventDefault();

        const filteredArr = tasks.filter((task) => task.taskCategory === filterInputValue);

    renderView(filteredArr);

})






// wystarczy dodac funkcje z filtrowaniem po taskCategory

//dataSet
//metody na tablicach
//findIndex


// dodac kategorie i mozliwosc szukania zadan po kategori

//usuwanie kategorii ale zablokowane do momentu, póki są jakieś zadania z tą kategorią



