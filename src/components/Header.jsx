import { useToDo } from "../context/toDoProvider";

function Header() {
  const {
    state: { todo },
  } = useToDo();
  const hasDone = todo.reduce((acc, item) => {
    return item.status === true ? acc + 1 : acc;
  }, 0);

  return (
    <header className="flex items-center justify-between px-4 border-b border-slate-200 bg-orange-100 h-15 shadow-md">
      <p className="text-lg font-bold antialiased"> TO DO APPLICATION</p>
      <p>
        <span className="font-bold">{hasDone}</span>/{todo.length} todos
        completed
      </p>
    </header>
  );
}

export default Header;
