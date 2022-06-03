import Todo from './Todo.js';

class TodoList {
 static getStoredTodos =() => {
   let todos;
   if (localStorage.getItem('todos') === null) {
     todos = [];
   } else {
     todos = JSON.parse(localStorage.getItem('todos'));
   }
   return todos;
 }

  updateStorage =(todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

 storeTodos =(todo) => {
   const todos = TodoList.getStoredTodos();
   todos.push(todo);
   this.updateStorage(todos);
 }

sortTodos =() => {
  const todos = TodoList.getStoredTodos();

  if (todos.length === null) {
    return [];
  }

  const sortedTodos = todos.sort((a, b) => a.index - b.index);

  const final = sortedTodos.map((todo, i) => ({

    index: i + 1,
    description: todo.description,
    completed: todo.completed,
  }));

  return final;
}

  addNewTodo =(description) => {
    const index = TodoList.getStoredTodos().length;
    const completed = false;
    const todo = new Todo(index + 1, description, completed);
    this.storeTodos(todo);

    return todo;
  }

deleteTodo =(num) => {
  const todos = TodoList.getStoredTodos();

  const filteredTodo = todos.filter((todo) => todo.index !== num);

  localStorage.setItem('todos', JSON.stringify(filteredTodo));
  const sortedTodo = this.sortTodos();
  localStorage.setItem('todos', JSON.stringify(sortedTodo));
}

editDescription=(index, description) => {
  const todos = TodoList.getStoredTodos();

  const todoItem = todos.find((todo) => todo.index === index);
  todoItem.description = description;
  todos[index - 1] = todoItem;
  this.updateStorage(todos);
}

changeTodoStatus =(num, status) => {
  const todos = TodoList.getStoredTodos();

  const todoItem = todos.find((todo) => todo.index === num);
  todoItem.completed = status;
  todos[num - 1] = todoItem;
  this.updateStorage(todos);
}

removeCompleted =() => {
  const todos = TodoList.getStoredTodos();
  const uncompletedTodos = todos.filter((todo) => !todo.completed);
  this.updateStorage(uncompletedTodos);
  const sortedTodo = this.sortTodos();
  localStorage.setItem('todos', JSON.stringify(sortedTodo));
}
}

export default TodoList;
