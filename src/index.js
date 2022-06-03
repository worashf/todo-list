import '@fortawesome/fontawesome-free/js/all.js';
import './style.css';
import { appendAllTodos, saveNewTodo, removeAllCompleted } from './modules/DomUtils.js';
import TodoList from './modules/TodoList.js';
import { addForm, todoInput, clearBtn } from './modules/Selector.js';

window.onload = () => {
  const todos = TodoList.getStoredTodos();
  appendAllTodos(todos);
};

addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const { value } = todoInput;
  if (value.trim !== '') {
    saveNewTodo(value);
    todoInput.value = '';
  }
});

clearBtn.addEventListener('click', () => {
  removeAllCompleted();
});
