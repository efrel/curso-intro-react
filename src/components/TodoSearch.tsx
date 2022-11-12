import "../styles/TodoSearch.css";

interface IProps {
  searchValue: string;
  setSearchValue: (v: string) => void;
}

export const TodoSearch = ({ searchValue, setSearchValue }: IProps) => {
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
