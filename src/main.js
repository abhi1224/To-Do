import './style.css'
import createTodo from './createTodo.js'
import renderTodo from './renderTodo.js';


let inputBox = document.querySelector(".input-box");
let btn = document.querySelector("#add");

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

