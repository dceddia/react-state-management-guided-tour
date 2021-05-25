import React, { useContext } from 'react';

const TodoContext = React.createContext();

const useTodos = () => {
  return useContext(TodoContext);
}

export { TodoContext, useTodos };