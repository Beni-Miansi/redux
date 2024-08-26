import { ADD_TODO, TOGGLE_TODO, EDIT_TODO } from './actions';

const initialState = {
  todos: []
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, isDone: !todo.isDone }
            : todo
        )
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id
            ? { ...todo, description: action.payload.description }
            : todo
        )
      };
    default:
      return state;
  }
};
