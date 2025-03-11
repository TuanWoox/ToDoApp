import { useToDo } from "../context/toDoProvider";
import ToDoList from "./ToDoList";

function ToDoContent() {
  const {
    state: { todo },
  } = useToDo();
  return (
    <div className="grow bg-white">
      <ul>
        {todo?.map((item) => (
          <ToDoList key={item.id} todo={item} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoContent;
