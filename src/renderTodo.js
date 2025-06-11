import toggleComplete from './toggleComplete.js'
import editTodo from './editTodo.js'

const Container = document.querySelector(".container");
const template = document.querySelector('template')


const renderTodo = (todo) => { 
   
    const clon = template.content.cloneNode(true);
    let li = clon.querySelector('.list-item');
    li.textContent = todo.text;

    const checkbox = clon.querySelector('input[type="checkbox"]');
    checkbox.setAttribute('data-id', todo.id);

    if (todo.completed) {
        checkbox.checked = true;
    }

    checkbox.addEventListener('change', (e) => {
        const id = e.target.getAttribute('data-id');
        toggleComplete(id);
    });

    const editBtn = clon.querySelector('.edit-btn');
    editBtn.addEventListener('click',() => {
        editTodo(todo);
    });

    Container.appendChild(clon);  
    
}
export default renderTodo;