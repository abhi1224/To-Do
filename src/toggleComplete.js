
const toggleComplete = (id) => {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    
    todos = todos.map((todo) => {
        if(todo.id === Number(id)){
            todo.completed = !(todo.completed);                        
        }
        return todo;
    })
    
    localStorage.setItem('todos', JSON.stringify(todos));
}
export default toggleComplete;