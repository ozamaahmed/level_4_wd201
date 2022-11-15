/* eslint-disable no-undef */
const todoList = require("../todo"); // first lets import our todo.js file
let today = new Date().toLocaleDateString("en-CA");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("Todolist Testing", () => {
  beforeAll(() => { //this function runs before any tests run
    add({
      title: "go to therapy",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });

  test("Add a new todo", () => { // in this test we are adding a new todo
    let length = all.length;

    add({
      title: "complete the assignment",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toBe(length + 1); //checking if the length increased by one or not
  });

  test("Mark todo as completed", () => { // we are expecting the first todo to be false and running markAsComplete function
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true); // then we are expecting it to be true
  });

  test("retrive all todos that are overdue", () => { 
    let listOfTodos = overdue(); //overdue function should return items which are overdue
    expect(listOfTodos.every((todo) => {return todo.dueDate < today;})).toBe(true); });
        // checking if every item returned is of duedate less than today
    
  test("retrive all todos that are due Today", () => {
    let listOfTodos = dueToday(); //dueToday function should return items which are due today

    expect(listOfTodos.every((todo) => {return todo.dueDate === today;})).toBe(true);});
        // checking if every item returned has duedate of today

  test("retrive all todos that are dueLater", () => {
    let listOfTodos = dueLater();expect(listOfTodos.every((todo) => {return todo.dueDate > today;})).toBe(true);});});
        // checking if every item returned is of duedate more than today