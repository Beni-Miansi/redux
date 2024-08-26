import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const [filter, setFilter] = useState('all');

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'done') return todo.isDone;
    if (filter === 'notDone') return !todo.isDone;
    return true;
  });

  return (
    <div>
      <div>
        <button onClick={() => setFilter('all')}>Tous</button>
        <button onClick={() => setFilter('done')}>Effectuées</button>
        <button onClick={() => setFilter('notDone')}>Non effectuées</button>
      </div>
      {filteredTodos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
