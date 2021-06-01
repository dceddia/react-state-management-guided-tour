import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, toggle } from './todosSlice';

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const addTodo = (event) => {
    event.preventDefault();
    dispatch(add(event.target.item.value));
    event.target.item.value = '';
  };

  const toggleTodo = (id) => {
    dispatch(toggle(id));
  };

  return (
    <>
      <h1>Packing List</h1>
      <form onSubmit={addTodo}>
        <input type="text" name="item" />
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} className="ml-3">
              <label className={todo.done ? 'done' : ''}>
                <input
                  type="checkbox"
                  className="mr-2"
                  value={todo.done}
                  onChange={() => toggleTodo(todo.id)}
                />
                <span>{todo.name}</span>
              </label>
            </li>
          ))}
        </ul>
      </form>
    </>
  );
};

export default Todos;
