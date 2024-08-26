import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const App = () => {
  return (
    <div className="App">
      <h1>Liste des Tâches</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
