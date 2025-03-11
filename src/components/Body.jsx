import AddSection from "./AddSection";
import ToDoContent from "./ToDoContent";

function Body() {
  return (
    <main className="flex flex-row flex-grow">
      <ToDoContent />
      <AddSection />
    </main>
  );
}

export default Body;
