import React, { useContext, useReducer } from 'react';
import Todos from './Todos';
import { TodoContext } from './TodoContext';

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
    <TodoContext.Provider value={{
      todos,
      addTodo,
      toggleTodo
    }}>
      <main>
        <Todos />
      </main>
    </TodoContext.Provider>
  );
};

export default App;
