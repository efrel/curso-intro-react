import { ITodo } from "./models";
import {
  CreateTodoButton,
  TodoCounter,
  TodoItem,
  TodoList,
  TodoSearch,
} from "./components";

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

      <TodoList>
        {todos.map((todo) => {
          return <TodoItem key={todo.text} {...todo} />;
        })}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
