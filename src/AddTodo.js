import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './redux/actions';

const AddTodo = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (description.trim()) {
      dispatch(addTodo(description));
      setDescription('');
    }
  };

  return (
    <div>
      <input
        type="text"S
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Ajouter une nouvelle tâche"
      />
      <button onClick={handleAddTodo}>Ajouter</button>
    </div>
  );
};

export default AddTodo;
