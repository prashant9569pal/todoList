import { createSlice, nanoid } from "@reduxjs/toolkit";

// Initialize initial state with todos fetched from local storage or a default todo
const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [
    { id: 1, text: "Hello world" },
  ],
};

// Create todo slice
export const todoSlice = createSlice({
  name: "todo", // Name of the slice
  initialState, // Initial state
  reducers: {
    // Reducer to add a new todo
    addTodo: (state, action) => {
      // Generate unique id for the new todo
      const todo = {
        id: nanoid(),
        text: action.payload, // Text of the todo
      };
      state.todos.push(todo); // Add new todo to the state
      localStorage.setItem("todos", JSON.stringify(state.todos)); // Update local storage
    },
    // Reducer to remove a todo
    removeTodo: (state, action) => {
      // Filter out the todo with the specified id
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos)); // Update local storage
    },
    // Reducer to toggle the completion status of a todo
    toggleTodo: (state, action) => {
      // Toggle the completed property of the todo with the specified id
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      localStorage.setItem("todos", JSON.stringify(state.todos)); // Update local storage
    },
  },
});

// Export action creators
export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

// Export reducer
export default todoSlice.reducer;
