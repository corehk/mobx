import './App.css';
import Counter from './components/Counter/Counter';
import CounterStore from './stores/CounterStore/CounterStore';

const counterStore = new CounterStore();
function App() {
  return (
    <div className="App">
      <Counter counterStore={counterStore} />
    </div>
  );
}

export default App;
