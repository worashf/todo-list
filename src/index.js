import '@fortawesome/fontawesome-free/js/all';
import './style.css';

const todoList = document.getElementById('todo-list');

const todos = [{
  index: 0,
  description: 'solve todo list project styling',
  completed: true,
}, {
  index: 1,
  description: 'solve todo list project local storage',
  completed: false,
}, {
  index: 2,
  description: 'solve todo list project styling',
  completed: false,
}, {
  index: 3,
  description: 'solve todo list project styling',
  completed: true,
}, {
  index: 4,
  description: 'solve todo list project styling',
  completed: true,
}];

const renderTodos = () => {
  for (let i = 0; i < todos.length; i += 1) {
    const li = document.createElement('li');
    const p = document.createElement('p');
    const check = document.createElement('input');
    const icon = document.createElement('i');
    check.setAttribute('type', 'checkbox');
    check.classList.add('checkbox');
    p.textContent = todos[i].description;
    icon.setAttribute('class', 'fa fa-ellipsis-v see-icon');
    li.appendChild(check);
    li.appendChild(p);
    li.appendChild(icon);
    li.classList.add('todo-item');
    todoList.appendChild(li);
  }
};

window.onload = () => renderTodos();
