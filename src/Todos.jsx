import React from 'react';

const Todos = ({ todos, addTodo, toggleTodo }) => {
  return (
    <>
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
    </>
  )
}

export default Todos;