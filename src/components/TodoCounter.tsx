import "../styles/TodoCounter.css";

interface IProps {
  total: number;
  completed: number;
}

export const TodoCounter = ({ total, completed }: IProps) => {
  return (
    <h1 className="TodoCounter">
      Has completado {completed} de {total} TODOs
    </h1>
  );
};
