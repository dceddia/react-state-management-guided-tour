import React from 'react';
import { observer } from 'mobx-react-lite';
import { useTodos } from './TodoContext';
import { useQuery } from 'react-query';

const Todos = observer(() => {
  const {
    isLoading,
    isFetching,
    data,
    error
  } = useQuery("todos", () =>
    fetch("http://localhost:3131/todos")
      .then(res => res.json())
  )

  const addTodo = event => {
    event.preventDefault();
    event.target.item.value = ''
  }

  if (isLoading) return "Loading..."
  if (error) return `Error: ${error.message}`

  return (
    <>
      <h1>Packing List</h1>
      <form onSubmit={addTodo}>
        <input type="text" name="item" />
        {isFetching && <div className="text-center">Updating...</div>}
        <ul>
          {data.map((todo) => (
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
})

export default Todos;