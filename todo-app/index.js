const addNew = document.getElementById('add-new');
const itemsContainer = document.getElementById('items-container');
const newTaskInput = document.getElementById('new-task');

let items = null;

const localStorageStarting = localStorage.getItem('todo-items');

if (localStorageStarting === null) {
  localStorage.setItem('todo-items', JSON.stringify([]));
  items = [];
} else {
  items = JSON.parse(localStorageStarting);
}

function removeItem() {
  items.splice(this.dataset.i, 1);

  localStorage.setItem('todo-items', JSON.stringify(items));

  render();
}

function addItem(newItem) {
  items.unshift(newItem);
  
  localStorage.setItem('todo-items', JSON.stringify(items));
  
  render();
}

addNew.addEventListener('click', () => {
  addItem(newTaskInput.value)
});

newTaskInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    addItem(e.target.value);
    
    e.target.value = '';
  }
})

function render() {
  const deleteButtons = document.getElementsByClassName('delete');
  Array.prototype.forEach.call(deleteButtons, (deleteButton) => deleteButton.removeEventListener('click', removeItem));
  
  function createItemHTML(item, i) {
    return `<div class="item"><span class="text">${item}</span><svg class="delete" data-i=${i} version="1.1" viewBox="0 0 900.5 900.5" xmlns="http://www.w3.org/2000/svg">
  <path d="m176.42 880.5c0 11.046 8.954 20 20 20h507.67c11.046 0 20-8.954 20-20v-648.01h-547.67v648.01zm386.34-537.73h75v436.03h-75v-436.03zm-150 0h75v436.03h-75v-436.03zm-150 0h75v436.03h-75v-436.03z"/>
  <path d="m618.82 91.911v-71.911c0-11.046-8.954-20-20-20h-297.15c-11.046 0-20 8.954-20 20v96.911h-139.8c-11.046 0-20 8.954-20 20v50.576c0 11.045 8.954 20 20 20h616.75c11.046 0 20-8.955 20-20v-50.576c0-11.046-8.954-20-20-20h-139.8v-25zm-75 20.888h-187.15v-37.799h187.15v37.799z"/>
</svg></div>`;
  }

  itemsContainer.innerHTML = '';
  
  items.forEach((item, i) => {
    itemsContainer.innerHTML += createItemHTML(item, i);
  });

  Array.prototype.forEach.call(deleteButtons, deleteButton => deleteButton.addEventListener('click', removeItem));
}

window.onload = () => render();

// a Kódot innen is köszönöm Iváncsics Márkus barátomnak!