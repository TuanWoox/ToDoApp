import Body from "./Body";
import ToDoProvider from "../context/toDoProvider";
import Header from "./Header";

function App() {
  return (
    <ToDoProvider>
      <div className="p-10 flex flex-col h-screen bg-orange-200">
        <Header />
        <Body />
      </div>
    </ToDoProvider>
  );
}

export default App;
