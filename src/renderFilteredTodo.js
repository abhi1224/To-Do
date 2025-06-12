const listContainer = document.querySelector('.todo-list');
const template = document.querySelector('template');

const renderFilteredTodo = (todos) => {
    console.log(todos);
    listContainer.innerHTML = '';

    todos.forEach(todo => {
        const clone = template.content.cloneNode(true);
        const li = clone.querySelector('.list-item');
        const checkbox = clone.querySelector('input[type="checkbox"]');
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

        listContainer.appendChild(clone);
    });
}

export default renderFilteredTodo;