import { useToDo } from "../context/toDoProvider";

function ToDoList({ todo }) {
  const { dispatch } = useToDo();
  const style = `flex flex-row justify-between items-center my-3 mx-1 
  ${
    todo.status === true
      ? "bg-green-100 text-green-700 line-through"
      : "bg-white"
  } 
  p-3 rounded shadow`;

  return (
    <div
      className={style}
      onClick={() => {
        dispatch({ type: "check", payload: todo.id });
      }}
    >
      <span>{todo.name}</span>
      <span
        className="hover:cursor-pointer"
        onClick={() => {
          dispatch({ type: "remove", payload: todo.id });
        }}
      >
        ❌
      </span>
    </div>
  );
}

export default ToDoList;
