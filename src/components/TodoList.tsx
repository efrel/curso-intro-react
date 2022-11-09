interface IProps {
  children: React.ReactNode;
}

export const TodoList = ({ children }: IProps) => {
  return <ul>{children}</ul>;
};
