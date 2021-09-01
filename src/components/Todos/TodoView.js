import { observer } from 'mobx-react-lite';
import { useTodolistStore } from '../../stores/TodoStore/TodoListStore';
function TodoView({ todo }) {
  const todoListStore = useTodolistStore();
  return (
    <li className={todo.completed ? 'completed' : ''}>
      <div className="view">
        <input
          checkbox={todo.completed.toString()}
          onChange={() => todo.toggle()}
          className="toggle"
          type="checkbox"
        />
        <label>{todo.title}</label>
        <button
          className="destroy"
          onClick={() => todoListStore.deleteTdo(todo.title)}
        />
      </div>
      <input className="edit" />
    </li>
  );
}

export default observer(TodoView);
