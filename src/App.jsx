import React, { useRef, useState } from 'react';
import Todos from './Todos';
import { TodoContext } from './TodoContext';
import { makeAutoObservable, observable } from 'mobx';

// Create an observable
// const todos = observable([]);
// const todos = new TodoList();
class TodoList {
  constructor() {
    this.todos = [];
    makeAutoObservable(this);
  }

  add(name) {
    this.todos.push({
      id: Math.random(),
      name: name,
      done: false
    })
  }

  toggleTodo(todo) {
    todo.done = !todo.done
  }
}

const App = () => {
  const [todoList] = useState(() => observable([]));

  return (
    <TodoContext.Provider value={todoList}>
      <main>
        <Todos />
      </main>
    </TodoContext.Provider>
  );
};

export default App;
