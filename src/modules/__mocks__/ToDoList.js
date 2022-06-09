
const todos = [{ index: 1, description: 'adas', completed: false }, { index: 2, description: 'secondBooks', completed: false }, { index: 3, description: 'asdadasd', completed: false }];

class TodoList {
  constructor(index, description, completed) {
    this.index = index;
    this.description = description;
    this.completed = completed;
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
 
    const index = todos.length;
    const completed = false;
    const todo = new TodoList(index + 1, description, completed);

    todos.push(todo);
 
    return todos.length;
  }

  deleteTodo =(num) => {
   
    todos.splice((num - 1), 1);
 
    return todos.length;
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

module.exports = TodoList;
