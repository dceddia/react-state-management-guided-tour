import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    add(state, action) {
      // mutation is okay (!!) because Redux Toolkit includes Immer
      state.push({
        id: Math.random(),
        name: action.payload,
        done: false,
      });
    },
    toggle(state, action) {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.done = !todo.done;
      }
    },
  },
});

export const { add, toggle } = todosSlice.actions;
export default todosSlice.reducer;
