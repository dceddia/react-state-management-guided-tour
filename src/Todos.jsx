import { observer } from 'mobx-react-lite';
import React from 'react';

// Wrap the component in observer()
const Todos = observer(({ todoList }) => {
  const addTodo = (event) => {
    event.preventDefault();
    todoList.add(event.target.item.value);
    event.target.item.value = '';
  };

  const toggleTodo = (todo) => {
    todoList.toggleTodo(todo);
  };

  return (
    <>
      <h1>Packing List</h1>
      <form onSubmit={addTodo}>
        <input type="text" name="item" />
        <ul>
          {todoList.todos.map((todo) => (
            <li key={todo.id} className="ml-3">
              <label className={todo.done ? 'done' : ''}>
                <input
                  type="checkbox"
                  className="mr-2"
                  value={todo.done}
                  onChange={() => toggleTodo(todo)}
                />
                <span>{todo.name}</span>
              </label>
            </li>
          ))}
        </ul>
      </form>
    </>
  );
});

export default Todos;
