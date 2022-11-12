import "../styles/TodoSearch.css";

export const TodoSearch = () => {
  const onSearchValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      type="text"
      placeholder="Sistema"
      onChange={onSearchValueChange}
    />
  );
};
