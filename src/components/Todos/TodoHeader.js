import { useState } from 'react';

function TodoHeader({ createTodo }) {
  const [title, setTitle] = useState('');
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
            createTodo(title);
            setTitle('');
          }
        }}
      />
    </header>
  );
}

export default TodoHeader;
