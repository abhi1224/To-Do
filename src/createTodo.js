const Container = document.querySelector(".container");
const template = document.querySelector('template')
const createTodo = (value) => {
    const clon = template.content.cloneNode(true);
    let li = clon.querySelector('.list-item');
    li.textContent = value;
    Container.appendChild(clon);
}
export default createTodo;