import "./App.css";
import InputItems from "./components/InputItems";

function App() {
  return (
    <div className="container w-25 p-3 p-3 mb-2 bg-light text-dark">
      <h1>Todo List</h1>
      <InputItems />
    </div>
  );
}

export default App;
