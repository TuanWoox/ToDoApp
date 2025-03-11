import { useState } from "react";
import { useToDo } from "../context/toDoProvider";

function AddSection() {
  const [name, setName] = useState("");
  const { dispatch } = useToDo();
  function handleAdd() {
    if (!name) return;
    const uuid = crypto.randomUUID();
    dispatch({
      type: "create",
      payload: {
        id: uuid,
        name: name,
      },
    });
    setName("");
  }
  return (
    <div className="bg-orange-100 p-4">
      <p className="font-bold">Add a todo</p>
      <input
        type="text"
        className="border border-gray-400 px-4 py-2 rounded me-2 block bg-slate-100"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        className="px-6 py-2 bg-amber-700 rounded text-white mt-2 w-full hover:cursor-pointer"
        onClick={handleAdd}
      >
        Add to list
      </button>
    </div>
  );
}

export default AddSection;
