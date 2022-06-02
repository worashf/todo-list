import '@fortawesome/fontawesome-free/js/all';
import './style.css';
import { appendAllTodos, saveNewTodo } from './modules/DomUtils';
import TodoList from './modules/TodoList';
import { addForm, todoInput } from './modules/Selector.js';

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
