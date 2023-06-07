import TodoItem from "./TodoItem";

const TodosList = ({todos}) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
export default TodosList;
