import React from 'react';

const Todos = () => {
  return (
    <>
      <h1>Packing List</h1>
      <form>
        <input type="text" name="item" />
        <ul>
          {[].map((todo) => (
            <li key={todo.id} className="ml-3">
              <label className={
                todo.done ? 'done' : ''
              }>
                <input
                  type="checkbox"
                  className="mr-2"
                  value={todo.done}
                  onChange={() => todo.toggle()} />
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