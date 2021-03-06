const todos = [{ index: 1, description: 'adas', completed: false }, { index: 2, description: 'secondBooks', completed: true }, { index: 3, description: 'asdadasd', completed: false }];

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

  addTodo =(description) => {
    const index = todos.length;
    const completed = false;
    const todo = new TodoList(index + 1, description, completed);

    todos.push(todo);

    return todo;
  }

  deleteTodo =(num) => {
    todos.splice((num - 1), 1);

    return todos.length;
  }

editDescription=(index, description) => {
  todos[index - 1].description = description;
  const updatedDescription = todos[index - 1].description;

  return updatedDescription;
}

changeTodoStatus =(num, status) => {
  todos[num - 1].completed = status;
  const updateStatus = todos[num - 1].completed;

  return updateStatus;
}

removeCompleted =() => {
  const uncompletedTodos = todos.filter((todo) => !todo.completed);

  return uncompletedTodos.length;
}
}

module.exports = TodoList;
