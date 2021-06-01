import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        {
          id: Math.random(),
          name: action.itemName,
          done: false
        },
      ]
    case 'toggle':
      return state.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            done: !todo.done
          }
        }
        return todo;
      })
  }
}

const App = () => {
  const [todos, dispatch] = useReducer(reducer, []);

  const addTodo = (event) => {
    event.preventDefault();
    dispatch({
      type: 'add',
      itemName: event.target.item.value
    })
    event.target.item.value = ''
  };

  const toggleTodo = id => {
    dispatch({ type: 'toggle', id })
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
