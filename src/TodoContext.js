import React, { useContext } from 'react';

// { Provider, Consumer }
const TodoContext = React.createContext();

const useTodos = () => {
  return useContext(TodoContext);
}

export { TodoContext, useTodos }