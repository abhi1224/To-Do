import './style.css'
import createTodo from './createTodo.js'
import renderTodo from './renderTodo.js'
import handlerIsActive from './handlerIsActive.js'
import filterTodo from './filter.js'
import renderFilteredTodo from './renderFilteredTodo.js'


let inputBox = document.querySelector(".input-box");
let btn = document.querySelector("#add");

let filterBtn = document.querySelector('#filter');
const listContainer = document.querySelector('.todo-list');


btn.addEventListener('click',() => {
  if(inputBox.value === ''){
    alert("You must write something !");
    return ;
  }
  createTodo(inputBox.value);
  inputBox.value = '';
})

window.addEventListener('DOMContentLoaded', () => {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  if(todos){
    todos.forEach(renderTodo);
  }
});

filterBtn.addEventListener('click', (e) => {
  handlerIsActive(e.target);
  const filtered = filterTodo(e.target);
  listContainer.innerHTML = '';
  renderFilteredTodo(filtered);
})
