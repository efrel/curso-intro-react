interface IProps {
  text: string;
}

export const TodoItem = ({ text }: IProps) => {
  return (
    <li>
      <span>X</span>
      <p>{text}</p>
      <span>O</span>
    </li>
  );
};
