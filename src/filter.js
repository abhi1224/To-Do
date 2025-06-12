const filterTodo = (item) => {
    const todos = JSON.parse(localStorage.getItem('todos'));
   
    if(item.getAttribute('data-filter') == 'completed'){
        return todos.filter(todo => todo.completed == true);
    }
    else if(item.getAttribute('data-filter') == 'uncompleted'){
        return todos.filter(todo => todo.completed == false);
    }
    return todos;
}

export default filterTodo;