import './style.css'
import createTodo from './createTodo.js'

let inputBox = document.querySelector(".input-box");
let btn = document.querySelector("#add");

btn.addEventListener('click',() => {
  if(inputBox.value == ''){
    alert("You must write something !");
    return ;
  }
  createTodo(inputBox.value);
  inputBox.value = '';
})


