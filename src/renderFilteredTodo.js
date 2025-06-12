import toggleComplete from './toggleComplete.js'
import editTodo from './editTodo.js'
import removeTodo from './removeTodo.js'

const listContainer = document.querySelector('.todo-list');
const template = document.querySelector('template');


const renderFilteredTodo = (todos) => {
    console.log(todos);
    listContainer.innerHTML = '';

    todos.forEach(todo => {
        const clone = template.content.cloneNode(true);
        const li = clone.querySelector('.list-item');
        let checkbox = clone.querySelector('input[type="checkbox"]');
        const editBtn = clone.querySelector('.edit-btn');
        const removeBtn = clone.querySelector('.remove-btn');

        li.textContent = todo.text;
        checkbox.checked = todo.completed;

        checkbox.setAttribute('data-id', todo.id);
        editBtn.setAttribute('data-id', todo.id);
        removeBtn.setAttribute('data-id', todo.id);

        if (todo.completed) {
            li.classList.add('completed');
        }
        checkbox.addEventListener('change', (e) => {
        const id = e.target.getAttribute('data-id');
        toggleComplete(id);        
        });

        editBtn.addEventListener('click',() => {               
            editTodo(todo);
        });
        
        removeBtn.addEventListener('click', () => {
            removeTodo(todo);
        });
        

        listContainer.appendChild(clone);
    });
}

export default renderFilteredTodo;