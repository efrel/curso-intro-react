import { useState } from "react";
import "../styles/TodoSearch.css";

export const TodoSearch = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const onSearchValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <>
      <input
        className="TodoSearch"
        type="text"
        placeholder="Sistema"
        value={searchValue}
        onChange={onSearchValueChange}
      />
      <span>{searchValue}</span>
    </>
  );
};
