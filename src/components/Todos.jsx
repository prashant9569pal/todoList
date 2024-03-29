import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../features/todo/todoSlice";

function Todos() {
  // Retrieve todos from Redux store
  const todos = useSelector((state) => state.todos);
  // Redux dispatch hook
  const dispatch = useDispatch();

  return (
    <>
      {/* Title */}
      <div>Todos</div>
      {/* List of todos */}
      <ul className="list-unstyled">
        {/* Iterate over todos */}
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="mt-4 d-flex justify-content-between align-items-center bg-dark px-4 py-2 rounded"
          >
            {/* Todo text with conditional line-through style if completed */}
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
              className="text-white"
            >
              {todo.text}
            </span>
            {/* Buttons for toggling and removing todos */}
            <div style={{ gap: "3px" }}>
              {/* Button to toggle todo completion */}
              <button
                onClick={() => dispatch(toggleTodo(todo.id))}
                className="btn btn-success btn-xs"
              >
                {/* SVG icon for toggle */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="24px"
                  height="24px"
                  margin="5px"
                >
                  <path
                    fill="#c8e6c9"
                    d="M36,42H12c-3.314,0-6-2.686-6-6V12c0-3.314,2.686-6,6-6h24c3.314,0,6,2.686,6,6v24C42,39.314,39.314,42,36,42z"
                  />
                  <path
                    fill="#4caf50"
                    d="M34.585 14.586L21.014 28.172 15.413 22.584 12.587 25.416 21.019 33.828 37.415 17.414z"
                  />
                </svg>
              </button>
              {/* Button to remove todo */}
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="btn btn-danger"
              >
                {/* SVG icon for removal */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24px"
                  height="24px"
                >
                  <path d="M 10 2 L 9 3 L 5 3 C 4.448 3 4 3.448 4 4 C 4 4.552 4.448 5 5 5 L 7 5 L 17 5 L 19 5 C 19.552 5 20 4.552 20 4 C 20 3.448 19.552 3 19 3 L 15 3 L 14 2 L 10 2 z M 5 7 L 5 20 C 5 21.105 5.895 22 7 22 L 17 22 C 18.105 22 19 21.105 19 20 L 19 7 L 5 7 z" />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
