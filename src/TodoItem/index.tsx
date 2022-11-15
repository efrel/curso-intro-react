import "./TodoItem.css";

interface IProps {
  text: string;
  completed: boolean;
  onComplete: () => void;
  onDelete: () => void;
}

export const TodoItem = ({ text, completed, onComplete, onDelete }: IProps) => {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        onClick={onComplete}
      >
        ✔
      </span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <span className="Icon Icon-delete" onClick={onDelete}>
        X
      </span>
    </li>
  );
};
