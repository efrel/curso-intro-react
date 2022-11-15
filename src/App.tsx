import { useState } from "react";
import { ITodo } from "./models";
import {
  CreateTodoButton,
  TodoCounter,
  TodoItem,
  TodoList,
  TodoSearch,
} from "./components";

const defaultTodos: ITodo[] = [
  { text: "ubuntu", completed: true },
  { text: "Manjaro", completed: true },
  { text: "Windows", completed: false },
];

function App() {
  const [todos, setTodos] = useState<ITodo[]>(defaultTodos);
  const [searchValue, setSearchValue] = useState<string>("");

  const completedTodos = todos.filter((x) => !!x.completed).length;
  const totalTodos = todos.length;

  let searchedTodos: ITodo[] = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
    });
  }

  return (
    <>
      <TodoCounter total={totalTodos} completed={completedTodos} />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map(({ text, completed }) => {
          return <TodoItem key={text} text={text} completed={completed} />;
        })}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
