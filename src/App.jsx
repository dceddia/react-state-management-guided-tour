import React, { useState } from 'react';
import Todos from './Todos';
import { TodoContext } from './TodoContext';
import { TodoList } from './models';


const App = () => {
  const [todoList] = useState(() => TodoList.create({ todos: [] }));

  return (
    <TodoContext.Provider value={todoList}>
      <main>
        <Todos />
      </main>
    </TodoContext.Provider>
  );
};

export default App;
