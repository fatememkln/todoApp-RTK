
import TodoItem from "./TodoItem";

const TodoList = () => {

  return (
    <div>
      <h2>TodoList</h2>
      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
