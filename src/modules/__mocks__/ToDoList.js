// import Todo from '../Todo.js';

class TodoList {
  constructor(index, description, completed) {
    this.index = index;
    this.description = description;
    this.completed = completed;
  }

 static getStoredTodos =() => {
   const todos = [{ index: 1, description: "adas", completed: false}, {index: 2, description: "secondBooks", completed: false}, {index: 3, description: "asdadasd", completed: false}];
   return todos;
 }

  updateStorage =(todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
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
    const todo = new TodoList(index + 1, description, completed);
    // this.storeTodos(todo);
    // storeTodos =(todo) => {
    const todos = TodoList.getStoredTodos();
    todos.push(todo);
    // this.updateStorage(todos);
    // }
    return todos.length;
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
module.exports = TodoList;
