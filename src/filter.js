const filterTodo = (item) => {
    const todos = JSON.parse(localStorage.getItem('todos'));
   
    if(item.getAttribute('data-filter') == 'completed'){
        // console.log(todos.filter(todo => todo.completed == true));        
        return todos.filter(todo => todo.completed == true);
    }
    else if(item.getAttribute('data-filter') == 'uncompleted'){
        // console.log(todos.filter(todo => todo.completed == false));
        return todos.filter(todo => todo.completed == false);
    }
    return todos;
}

export default filterTodo;