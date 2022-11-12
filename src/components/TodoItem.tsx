import { ITodo } from "./../models/Todo";
import "../styles/TodoItem.css";

export const TodoItem = ({ text, completed }: ITodo) => {
  const onClickButton = (msg: string) => {
    alert(msg);
  };

  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        onClick={() => onClickButton(`Aquí se abriria el modal`)}
      >
        ✔
      </span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={() =>
          onClickButton(
            `Esta función se ejecuta al inicio, no al presionar el botón`
          )
        }
      >
        X
      </span>
    </li>
  );
};
