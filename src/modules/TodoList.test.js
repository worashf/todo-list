jest.mock('./TodoList.js');
const TodoList = require('./TodoList.js');

const todolist = new TodoList();

test('Addition', () => {
  expect(todolist.addNewTodo('micah')).toBe(4);
});