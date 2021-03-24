// array to hold todo items
let todoItems = [];

// render tobo object on the screen
function renderTodo(todo) {
  // using the browser's localstorage, instead of writing a to file
  localStorage.setItem('saveTodo', JSON.stringify(todoItems));
  // select first element with a class of `js-todo-list`
  const list = document.querySelector('.js-todo-list');
  // stuff
  const item = document.querySelector(`[data-key='${todo.id}']`);

  //removes item from the DOM and whitespace
  if (todo.deleted) {
    item.remove();
    if (todoItems.length === 0) list.innerHTML = '';
    return
  }

  // checks if 'todo.checked' is true, assigns 'done' to `isChecked` if true. else,  empty string
  const isChecked = todo.checked ? 'done' : '';
  // create an 'li' element and assign it to 'node'
  const node = document.createElement("li");
  // class attribute
  node.setAttribute('class', `todo-item ${isChecked}`);
  // data-key attribute to the id of the todo
  node.setAttribute('data-key', todo.id);
  // contents of the `li` element created above
  node.innerHTML = `
    <input id="${todo.id}" type="checkbox"/>
    <label for="${todo.id}" class="tick js-tick"></label>
    <span>${todo.text}</span>
    <button class="delete-todo js-delete-todo">
    <svg><use href="#delete-icon"></use></svg>
    </button>
  `;

  // if exists
  if (item) {
    // replace
    list.replaceChild(node, item);
  } else {
    // appends element to the DOM as the last child of the referenced 'list' variable
    list.append(node);
  }
}
// creates a todo object based on input text then pushes it to the array
function addTodo(text) {
  const todo = {
    text,
    checkmark: false,
    id: Date.now(),
  };

  todoItems.push(todo);
  renderTodo(todo);
}

function toggleCheck(key) {
  const index = todoItems.findIndex(item => item.id === Number(key));
  todoItems[index].checked = !todoItems[index].checked;
  renderTodo(todoItems[index]);
}

function deleteTodo(key) {
  // find corresponding todo object in array
  const index = todoItems.findIndex(item => item.id === Number(key));
  // create new object with properties of the current todo item and a `deleted` property which is set to true
  const todo = {
    deleted: true,
    ...todoItems[index]
  };
  // remove the todo item from the array by filtering it out
  todoItems = todoItems.filter(item => item.id !== Number(key));
  renderTodo(todo);
}

function main() {
    // select the form element
const form = document.querySelector('.js-form');
// add a submit event listener
form.addEventListener('submit', event => {
  // prevent page refresh on form submission
  event.preventDefault();
  // select the text input
  const input = document.querySelector('.js-todo-input');

  // get the value of the input and remove whitespace
  const text = input.value.trim();
  if (text !== '') {
    addTodo(text);
    input.value = '';
    input.focus();
  }
});

// select entire list
const list = document.querySelector('.js-todo-list');
// event listener for click
list.addEventListener('click', clickEvent => {
  if (clickEvent.target.classList.contains('js-tick')) {
    const itemKey = clickEvent.target.parentElement.dataset.key;
    toggleCheck(itemKey);
  }
  // event listener for delete
  if (clickEvent.target.classList.contains('js-delete-todo')) {
    const itemKey = clickEvent.target.parentElement.dataset.key;
    deleteTodo(itemKey);
  }
});


// get the values from localstorage and turn it back into an obj if it exists
document.addEventListener('DOMContentLoaded', () => {
  const Todo = localStorage.getItem('saveTodo');
  if (Todo) {
    todoItems = JSON.parse(Todo);
    todoItems.forEach(item => {
      renderTodo(item);
    });
  }
});
}
main();