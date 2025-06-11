const editTodo = (todo) => {

    let inputValue = document.querySelector('.input-box'); 
    inputValue.value = todo.text;

    let add = document.querySelector('#add')
    add.textContent = 'Update';
    
    const newBtn = add.cloneNode(true);
    add.parentNode.replaceChild(newBtn, add);

    newBtn.addEventListener('click', () => {
        let todos = JSON.parse(localStorage.getItem('todos'));
        let updatedTodos = todos.map(ele => {
            if(ele.id === Number(todo.id)){
                ele.text = inputValue.value;
            }
            return ele;
        })
        localStorage.setItem('todos', JSON.stringify(updatedTodos));

        inputValue.value = '';
        newBtn.textContent = 'Add';
        location.reload();
    });
    
}
export default editTodo;