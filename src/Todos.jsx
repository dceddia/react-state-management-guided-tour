import React from 'react';
import { observer } from 'mobx-react-lite';
import { useTodos } from './TodoContext';
import { action } from 'mobx';

const Todos = observer(() => {
  const todos = useTodos();

  const addTodo = action(event => {
    event.preventDefault();
    todos.push({
      id: Math.random(),
      name: event.target.item.value,
      done: false
    })
    event.target.item.value = ''
  })

  // Wrap these in action() if the observable doesn't
  // have methods for making changes.
  const toggleTodo = action(todo => {
    todo.done = !todo.done
  })

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
                  onChange={() => toggleTodo(todo)} />
                <span >{todo.name}</span>
              </label>
            </li>
          ))}
        </ul>
      </form>
    </>
  )
})

export default Todos;