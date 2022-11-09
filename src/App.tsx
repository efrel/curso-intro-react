import { TodoCounter, TodoSearch } from "./components";

interface ITodo {
  text: string;
  completed: boolean;
}

const todos: ITodo[] = [
  { text: "ubuntu", completed: false },
  { text: "Manjaro", completed: false },
  { text: "Windows", completed: false },
];

function App() {
  return (
    <>
      <TodoCounter />

      <TodoSearch />

      {/* <TodoList>
        {todos.map((todo) => {
          <TodoItem />;
        })}
      </TodoList> */}

      {/* <CreateTodoButton /> */}
      <button>+</button>
    </>
  );
}

export default App;
