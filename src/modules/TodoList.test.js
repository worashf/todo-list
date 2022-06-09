jest.mock('./TodoList.js');
const TodoList = require('./__mocks__/ToDoList.js');

const todolist = new TodoList();

describe(' Test Addition functions', () => {
  test('Addition', () => {
    // arrage and act
    const foourthTdo = todolist.addNewTodo('micah');
    const fifthTodo = todolist.addNewTodo('genesis');
    const sixDescription = 'new todo';
    const todo = todolist.addTodo(sixDescription);
    // assert
    expect(foourthTdo).toBe(4);
    expect(fifthTodo).toBe(5);
    expect(todo.description).toBe('new todo');
  });
});

describe(' Test delete functions', () => {
  test('Deletion', () => {
    expect(todolist.deleteTodo(2)).toBe(5);
    expect(todolist.deleteTodo(1)).toBe(4);
  });
});

describe(' Test status change from completed to uncompleted and vise versa ', () => {
  test('completed  => false', () => {
    const todo = todolist.addTodo('best done');
    expect(todo.completed).toBeFalsy();
    // arrage
    const completed1 = true;
    const completed2 = false;
    // act
    const todoStatus1 = todolist.changeTodoStatus(1, completed1);
    const todoStatus2 = todolist.changeTodoStatus(2, completed2);
    expect(todoStatus1).toBeTruthy();
    expect(todoStatus2).toBeFalsy();
  });
});

describe(' Test editing description function', () => {
  test('update todo description => new description', () => {
    // arrage
    const todoDescription = 'new description';
    // act
    const updatedDescription = todolist.editDescription(1, todoDescription);
    // assert
    expect(updatedDescription).toBe(todoDescription);
  });
});

describe(' Test clear all function', () => {
  test('Clear all completed', () => {
    // check for existing array of length 5
    expect(todolist.removeCompleted()).toEqual(4);
    // Arrange for further completion by changing status
    const completedStatus = true;
    // Act
    todolist.changeTodoStatus(3, completedStatus);
    // Assert new list after completed are filtered
    expect(todolist.removeCompleted()).toEqual(3);
  });
});
