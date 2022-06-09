jest.mock('./TodoList.js');
const TodoList = require('./__mocks__/ToDoList.js');

const todolist = new TodoList();

describe(' Test todolist functions', () => {
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
  test('Deletion', () => {
    expect(todolist.deleteTodo(2)).toBe(5);
    expect(todolist.deleteTodo(1)).toBe(4);
  });
  test('completed  => false', () => {
    const todo = todolist.addTodo('best done');
    expect(todo.completed).toBeFalsy();
  });
  test("update todo description => new description",()=>{
     // arrage 
     let todoDescription = "new description"
     console.log(todoDescription)
     //act
     let updatedDescription = todolist.editDescription(1,todoDescription);
     console.log(updatedDescription)
     //assert
     expect(updatedDescription).toBe(todoDescription)


  })
  test("change todo status form completed to uncompleted and vise versa",()=>{
    //arrage 
   let completed1 =true;
   let completed2= false;
   //act
   let todoStatus1 =todolist.changeTodoStatus(1,completed1);
   let todoStatus2= todolist.changeTodoStatus(2,completed2)
   expect(todoStatus1).toBeTruthy()
   expect(todoStatus2).toBeFalsy()


  })

});



