import { types } from 'mobx-state-tree';

const Todo = types.model({
  id: types.identifierNumber,
  name: types.string,
  done: types.boolean
}).actions((self) => ({
  toggle() {
    self.done = !self.done
  }
}))

const TodoList = types.model({
  todos: types.array(Todo)
}).actions((self) => ({
  add(name) {
    self.todos.push({
      id: Math.random(),
      name,
      done: false
    })
  }
}))

export { Todo, TodoList };