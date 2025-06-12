const removeTodo = (todo) => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    let updatedTodos = todos.filter((element) => (element.id !== Number(todo.id)))
    localStorage.setItem('todos',JSON.stringify(updatedTodos));
    location.reload();        
}
export default removeTodo;