import { useState } from "react";
import { ITodo } from "../models";
import { AppUI } from "./AppUI";

// const defaultTodos: ITodo[] = [
//   { text: "ubuntu", completed: true },
//   { text: "Manjaro", completed: true },
//   { text: "Windows", completed: false },
// ];

function App() {
  const localStorageTodos = localStorage.getItem("TODOS_V1");
  let parsedTodos: ITodo[];

  if (!localStorageTodos) {
    localStorage.setItem("TODOS_V1", JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = useState<ITodo[]>(parsedTodos);
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

  const saveTodos = (newTodos: ITodo[]) => {
    const stringfiedTodos = JSON.stringify(newTodos);
    localStorage.setItem("TODOS_V1", stringfiedTodos);
    setTodos(newTodos);
  };

  const completeTodo = (text: string) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);

    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text: string) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);

    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
