import { useState } from "react";
import { ITodo } from "../models";
import { AppUI } from "./AppUI";

// const defaultTodos: ITodo[] = [
//   { text: "ubuntu", completed: true },
//   { text: "Manjaro", completed: true },
//   { text: "Windows", completed: false },
// ];

function useLocalStorage(itemName: string) {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem: ITodo[];

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify([]));
    parsedItem = [];
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = useState<ITodo[]>(parsedItem);

  const saveItem = (newItem: ITodo[]) => {
    const stringfiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringfiedItem);
    setItem(newItem);
  };
}

function App() {
  const [todos, saveTodos] = useLocalStorage("TODOS_V1");

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
