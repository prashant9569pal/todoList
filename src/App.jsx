import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div class="container mt-5 .bg-secondary.bg-gradient">
      <div class="row justify-content-center ">
        <div class="col-md-8">
          <h1 class="text-center mb-4">Todo-List</h1>
          <AddTodo />
          <Todos />
        </div>
      </div>
    </div>
  );
}

export default App;
