const inputBox = document.querySelector('.input-box');
const todoList = document.querySelector('.todo-list');
const addButton = document.querySelector('#add');

let todos = [];
let editIndex = null;

// Load todos on page load
window.addEventListener('DOMContentLoaded', () => {
    const stored = localStorage.getItem('todos');
    if (stored) {
        todos = JSON.parse(stored);
        renderTodos();
    }
});

// Save todos to localStorage
const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
};

// Render todos on screen
const renderTodos = () => {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.addEventListener('change', () => toggleComplete(index));
        li.appendChild(checkbox);

        const p = document.createElement('p');
        p.className = 'todo-text';
        p.innerText = todo.text;
        if (todo.completed) {
            p.style.textDecoration = 'line-through';
        }
        li.appendChild(p);

        const editBtn = document.createElement('button');
        editBtn.innerText = 'Edit';
        editBtn.classList.add('btn', 'edit-btn');
        editBtn.addEventListener('click', () => startEdit(index));
        li.appendChild(editBtn);

        const removeBtn = document.createElement('button');
        removeBtn.innerText = 'Remove';
        removeBtn.classList.add('btn', 'remove-btn');
        removeBtn.addEventListener('click', () => removeTodo(index));
        li.appendChild(removeBtn);

        todoList.appendChild(li);
    });
};

// Add or edit a todo
const addOrEditTodo = () => {
    const text = inputBox.value.trim();
    if (text.length === 0) {
        alert('You must write something!');
        return;
    }

    if (editIndex !== null) {
        todos[editIndex].text = text;
        editIndex = null;
        addButton.innerText = 'Add';
    } else {
        todos.push({ text: text, completed: false });
    }

    inputBox.value = '';
    saveTodos();
    renderTodos();
};

// Remove a todo
const removeTodo = (index) => {
    todos.splice(index, 1);
    saveTodos();
    renderTodos();
};

// Start editing a todo
const startEdit = (index) => {
    inputBox.value = todos[index].text;
    inputBox.focus();
    addButton.innerText = 'Edit';
    editIndex = index;
};

// Toggle checkbox state
const toggleComplete = (index) => {
    todos[index].completed = !todos[index].completed;
    saveTodos();
    renderTodos();
};

addButton.addEventListener('click', addOrEditTodo);
