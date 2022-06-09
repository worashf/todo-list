jest.mock('./TodoList.js');
const TodoList = require('./__mocks__/ToDoList');

const todolist = new TodoList();

describe('addition test', () => {
  test('Addition', () => {
    //arrage and act
    let  foourthTdo =todolist.addNewTodo('micah');
    let fifthTodo = todolist.addNewTodo('genesis')
    let sixDescription = "new todo"
    let sixTodo =  todolist.addNewTodo(sixDescription)
    //assert
    expect(foourthTdo).toBe(4);
    expect(fifthTodo).toBe(5);
    expect(sixDescription).toBe("new todo");
  });
});

describe('deletion test', () => {
  test('Deletion', () => {
    
    expect(todolist.deleteTodo(2)).toBe(5);
    expect(todolist.deleteTodo(1)).toBe(4);
  });
});