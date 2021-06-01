import React from 'react';
import Todos from './Todos';
import TodoList from './TodoList';

// Create a long-lived instance. It's observable.
const list = new TodoList();

const App = () => {
  return (
    <main>
      {/* pass the instance around */}
      <Todos todoList={list} />
    </main>
  );
};

export default App;
