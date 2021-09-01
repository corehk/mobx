import TodoViewStore from './TodoViewStore';
import { makeObservable, observable, action, computed } from 'mobx';
import { useContext, createContext } from 'react';
class TodoListStore {
  todos = [];
  constructor(todos) {
    if (todos) this.todos = todos;
    makeObservable(this, {
      todos: observable,
      createTodo: action,
      unCompletedTodoCount: computed,
    });
  }
  createTodo(title) {
    this.todos.push(new TodoViewStore(title));
  }
  get unCompletedTodoCount() {
    return this.todos.filter((todo) => !todo.completed).length;
  }
}

const TodoListStoreContext = createContext();

const TodolistStoreProvider = ({ store, children }) => {
  return (
    <TodoListStoreContext.Provider value={store}>
      {children}
    </TodoListStoreContext.Provider>
  );
};

const useTodolistStore = () => {
  return useContext(TodoListStoreContext);
};

export default TodoListStore;
export { TodolistStoreProvider, useTodolistStore };
