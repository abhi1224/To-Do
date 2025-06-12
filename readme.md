# 📝 Todo App

A simple yet powerful Todo List application built using **HTML, CSS, and Vanilla JavaScript**, with features like task creation, editing, deletion, completion toggling, filtering, and persistent storage using **localStorage**.

---

## 📸 Preview

![Todo App Screenshot](./public/Screenshot%20.png)

---

## 🚀 Features

- ✅ Add new todos
- 🖊️ Edit existing todos
- ❌ Remove individual todos
- 🔁 Toggle task completion
- 🔍 Filter by:
  - All
  - Completed
  - Uncompleted
- 💾 Data persists in `localStorage`

---

## 📂 Project Structure

├── index.html

├── src

    ├── style.css    
    ├── main.js # Entry point
    ├── createTodo.js # Handles adding todos
    ├── editTodo.js # Handles editing a todo
    ├── removeTodo.js # Handles deleting a todo
    ├── toggleComplete.js # Handles toggle-completion
    ├── renderTodo.js # Renders a single todo
    ├── renderTodos.js # Renders list of todos
    ├── filterTodo.js # Handles filtering logic
    ├── handlerIsActive.js # Handles active filter highlighting
    └── README.md # Project documentation

---

## 🧠 Tech Stack

- HTML
- CSS (Flexbox, basic styling)
- JavaScript (ES6 modules, localStorage API)

---

## 📦 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/abhi1224/todo-app.git
cd todo-app
