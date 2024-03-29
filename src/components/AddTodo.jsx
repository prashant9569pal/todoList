import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  // State to manage input value
  const [input, setInput] = useState("");
  // Redux dispatch hook
  const dispatch = useDispatch();

  // Function to handle adding a new todo
  const addTodoHandler = (e) => {
    // Prevent default form submission behavior
    e.preventDefault();
    // Dispatch action to add todo with input value
    dispatch(addTodo(input));
    // Reset input value after adding todo
    setInput("");
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="row g-3 mt-4 justify-content-center"
    >
      <div className="col-md-6">
        {/* Input field for entering new todo */}
        <input
          type="text"
          className="form-control"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            backgroundColor: "#555",
            color: "white",
            borderColor: "#6c757d",
          }}
        />
      </div>
      <div className="col-auto">
        {/* Button to add todo */}
        <button
          type="submit"
          className="btn btn-primary"
          style={{ backgroundColor: "#37292b", borderColor: "#6c757d" }}
        >
          Add Todo
        </button>
      </div>
    </form>
  );
}

export default AddTodo;
