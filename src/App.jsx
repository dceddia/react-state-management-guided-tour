import React, { useReducer } from 'react';
import Todos from './Todos';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import todosReducer from './todosSlice';

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <main>
        <Todos />
      </main>
    </Provider>
  );
};

export default App;
