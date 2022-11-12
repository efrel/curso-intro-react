import { useState } from "react";
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
  { text: "Manjaro", completed: true },
  { text: "Windows", completed: false },
];

function App() {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <>
      <TodoCounter />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {todos.map(({ text, completed }) => {
          return <TodoItem key={text} text={text} completed={completed} />;
        })}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
