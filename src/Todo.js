import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, editTodo } from './redux/actions';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(todo.description);

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleEdit = () => {
    if (isEditing && newDescription.trim()) {
      dispatch(editTodo(todo.id, newDescription));
    }
    setIsEditing(!isEditing);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={handleToggle}
      />
      {isEditing ? (
        <input
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
      ) : (
        <span style={{ textDecoration: todo.isDone ? 'line-through' : 'none' }}>
          {todo.description}
        </span>
      )}
      <button onClick={handleEdit}>
        {isEditing ? 'Enregistrer' : 'Modifier'}
      </button>
    </div>
  );
};

export default Todo;
