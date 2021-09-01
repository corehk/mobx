import { useState } from 'react';
import { useTodolistStore } from '../../stores/TodoStore/TodoListStore';

function TodoHeader() {
  const [title, setTitle] = useState('');
  const todoListStore = useTodolistStore();

  return (
    <header className="header">
      <h1>todos {title}</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            todoListStore.createTodo(title);
            setTitle('');
          }
        }}
      />
    </header>
  );
}

export default TodoHeader;
