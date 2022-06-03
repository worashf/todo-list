import { todoListWrapper } from './Selector.js';
import TodoList from './TodoList.js';

const todoList = new TodoList();

const editTodo = (element, e) => {
  e.preventDefault();
  const newDescription = e.target.value;
  const index = e.target.parentElement.id;
  todoList.editDescription(parseInt(index, 10), newDescription);
  element.classList.remove('edit');
  element.parentElement.classList.remove('edit');
};
const deleteTodo = (element) => {
  const parent = element.parentElement;

  const index = element.parentElement.id;

  todoList.deleteTodo(parseInt(index, 10));
  parent.remove();
  todoListWrapper.childNodes.forEach((todo, i) => {
    todo.id = i + 1;
  });
};

const changeTodoStatus = (element) => {
  element.classList.toggle('completed');
  return element.classList.contains('completed');
};
const renderTodoHtml = (todo) => {
  const { index, description } = todo;
  const li = document.createElement('li');
  li.classList.add('todo-item');
  li.setAttribute('id', `${index}`);

  const statusIcon = document.createElement('input');
  statusIcon.setAttribute('type', 'checkbox');
  statusIcon.classList.add('checkbox');

  const descriptionInput = document.createElement('input');
  descriptionInput.setAttribute('type', 'text');
  descriptionInput.setAttribute('class', 'description');
  descriptionInput.value = description;
  descriptionInput.readOnly = true;

  const detailIcon = document.createElement('i');
  detailIcon.setAttribute('class', 'fa fa-ellipsis-v see-icon');
  detailIcon.setAttribute('id', `detail-icon-${index}`);
  detailIcon.style.opacity = 1;
  const deleteBtn = document.createElement('button');
  const deleteIcon = document.createElement('i');
  deleteIcon.setAttribute('class', 'fa fa-trash delete-icon');
  deleteBtn.style.opacity = 0;
  deleteBtn.setAttribute('class', 'delete-btn');
  deleteBtn.setAttribute('type', 'button');
  deleteBtn.setAttribute('id', `delete-btn-${index}`);
  deleteBtn.appendChild(deleteIcon);

  descriptionInput.addEventListener('click', (e) => {
    e.preventDefault();
    descriptionInput.readOnly = false;
    descriptionInput.classList.add('edit');
    descriptionInput.parentElement.classList.add('edit');
    descriptionInput.parentElement.childNodes[2].style.opacity = 0;
    deleteBtn.style.opacity = 1;
    deleteBtn.style.justifySelf = 'end';
  });
  descriptionInput.addEventListener('focusout', (e) => {
    e.preventDefault();
    descriptionInput.readOnly = true;
    descriptionInput.classList.remove('edit');
    descriptionInput.parentElement.classList.remove('edit');
    descriptionInput.parentElement.childNodes[2].style.opacity = 1;
    deleteBtn.style.opacity = 0;
  });
  descriptionInput.addEventListener('keypress', (e) => {
    if ((e.code === 'Space' || e.code === 'Enter') && !li.classList.contains('edit')) {
      e.preventDefault();
      descriptionInput.readOnly = false;
      descriptionInput.classList.add('edit');
      descriptionInput.parentElement.classList.add('edit');
    } else if (e.code === 'Enter' && li.classList.contains('edit')) {
      editTodo(descriptionInput, e);
    }
  });

  deleteBtn.addEventListener('click', () => deleteTodo(deleteBtn));

  statusIcon.addEventListener('change', () => {
    const index = statusIcon.parentElement.id;
    todoList.changeTodoStatus(parseInt(index, 10), changeTodoStatus(li));
  });
  li.appendChild(statusIcon);
  li.appendChild(descriptionInput);
  li.appendChild(detailIcon);
  li.appendChild(deleteBtn);

  return li;
};

const appendAllTodos = (todos) => {
  const allTodoElements = [];

  todos.forEach((todo) => {
    allTodoElements.push(renderTodoHtml(todo));
  });

  allTodoElements.forEach((li) => {
    todoListWrapper.appendChild(li);
  });
};

const appendTodo = (todoElement) => {
  todoListWrapper.appendChild(todoElement);
};

const saveNewTodo = (description) => {
  const todo = todoList.addNewTodo(description);
  const li = renderTodoHtml(todo);
  appendTodo(li);
};

const removeAllCompleted = () => {
  todoList.removeCompleted();
  const completedTodos = document.querySelectorAll('.completed');
  completedTodos.forEach((todo) => todo.remove());
  todoListWrapper.childNodes.forEach((todo, i) => {
    todo.id = i + 1;
  });
};

export { saveNewTodo, appendAllTodos, removeAllCompleted };
