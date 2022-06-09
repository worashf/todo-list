jest.mock('./TodoList.js');
const TodoList = require('./TodoList.js');

const todolist = new TodoList();

describe('addition test', () => {
  test('Addition', () => {
    expect(todolist.addNewTodo('micah')).toBe(4);
    expect(todolist.addNewTodo('genesis')).toBe(5);
  });
});

describe('deletion test', () => {
  test('Deletion', () => {
    expect(todolist.deleteTodo(2)).toBe(4);
    expect(todolist.deleteTodo(1)).toBe(3);
  });
});