import Todo from './Todo.js';

class TodoList {
  constructor() {

  }

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
  let newTodo;
  const sortedTodos = TodoList.getStoredTodos().sort((a, b) => a.index - b.index);
  console.log(sortedTodos);
  //   sortedTodos = sortedTodos.map((todo,index)=>{
  //     newTodo = new Todo(index, todo.description, todo.completed);
  // })
  return sortedTodos;
}

  addNewTodo =(description) => {
    const index = TodoList.getStoredTodos().length;
    const completed = false;
    const todo = new Todo(index+1, description, completed);
    this.storeTodos(todo);

    return todo;
  }

deleteTodo =(num) => {
  const todos = TodoList.getStoredTodos();
  console.log(todos)
  const filteredTodo = todos.filter((todo) => todo.index !== num);
  console.log(num, 'index');

  localStorage.setItem('todos', JSON.stringify(filteredTodo));


}

editDescription=(index, description) => {
  const todos = TodoList.getStoredTodos();

  const todoItem = todos.find((todo) => todo.index === index);
  todoItem.description = description;
  todos[index-1] = todoItem;
  this.updateStorage(todos);
}
}

export default TodoList;
