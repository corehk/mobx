import TodoViewStore from './TodoViewStore';
import {
  makeObservable,
  observable,
  action,
  computed,
  runInAction,
} from 'mobx';
import { useContext, createContext } from 'react';
import axios from 'axios';
class TodoListStore {
  todos = [];
  constructor(todos) {
    if (todos) this.todos = todos;
    makeObservable(this, {
      todos: observable,
      createTodo: action,
      unCompletedTodoCount: computed,
      deleteTdo: action,
    });
    this.loadTodos();
  }
  createTodo(title) {
    this.todos.push(new TodoViewStore(title));
  }
  deleteTdo(title) {
    this.todos = this.todos.filter((todo) => todo.title !== title);
  }
  get unCompletedTodoCount() {
    return this.todos.filter((todo) => !todo.completed).length;
  }
  //发起异步请求的时候并不能触发action，这个时候需要使用runInAction方法来触发action
  async loadTodos() {
    let todos = await axios
      .get('http://localhost:3005/todo')
      .then((response) => response.data);
    runInAction(() =>
      todos.forEach((todo) => this.todos.push(new TodoViewStore(todo.title)))
    );
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
