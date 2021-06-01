import { makeAutoObservable } from 'mobx';

class TodoList {
  constructor() {
    this.todos = [];
    makeAutoObservable(this);
  }

  add(name) {
    this.todos.push({
      id: Math.random(),
      name: name,
      done: false,
    });
  }

  toggleTodo(todo) {
    todo.done = !todo.done;
  }
}

export default TodoList;
