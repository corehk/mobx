import './App.css';
import Counter from './components/Counter/Counter';
import CounterStore from './stores/CounterStore/CounterStore';
import TodoListView from './components/Todos/TodoListView';
import './index.css';

import TodoListStore, {
  TodolistStoreProvider,
} from './stores/TodoStore/TodoListStore';
import TodoViewStore from './stores/TodoStore/TodoViewStore';

const todoListStore = new TodoListStore([
  new TodoViewStore('Hello Mobx'),
  new TodoViewStore('HelloReact'),
]);

const counterStore = new CounterStore();
function App() {
  return (
    <TodolistStoreProvider store={todoListStore}>
      <div className="App">
        <Counter counterStore={counterStore} />
        <TodoListView />
      </div>
    </TodolistStoreProvider>
  );
}

export default App;
