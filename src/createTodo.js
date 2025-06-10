import renderTodo from './renderTodo.js'

const createTodo = (value) => {

    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const newTodo = {
        id: Date.now(),
        text: value,
        completed: false
    };
    todos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(todos));    

    renderTodo(newTodo);

}
export default createTodo;