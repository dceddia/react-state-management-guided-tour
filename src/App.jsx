import React, { useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();
    const itemName = event.target.item.value;
    event.target.item.value = '';

    setTodos((previous) => {
      return [
        ...previous,
        {
          id: Math.random(),
          name: itemName,
          done: false
        },
      ];
    });
  };

  const toggleTodo = id => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          done: !todo.done
        }
      }
      return todo;
    }))
  }

  return (
    <main>
      <h1>Packing List</h1>
      <form onSubmit={addTodo}>
        <input type="text" name="item" />
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} className="ml-3">
              <label className={
                todo.done ? 'done' : ''
              }>
                <input
                  type="checkbox"
                  className="mr-2"
                  value={todo.done}
                  onChange={() => toggleTodo(todo.id)} />
                <span >{todo.name}</span>
              </label>
            </li>
          ))}
        </ul>
      </form>
    </main >
  );
};

export default App;
