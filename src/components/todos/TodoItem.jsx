import { useDispatch, useSelector } from "react-redux";
import {
  deleteAsyncTodo,
  toggleAsyncTodo,
} from "../../features/todo/todoSlice";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.todos);

  return (
    <li
      className={`list-group-item ${completed && "list-group-item-success"} ${
        loading ? "opacity-50" : "opacity-100"
      }`}
    >
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center gap-1">
          <input
            type="checkbox"
            className="mr-3"
            checked={completed}
            onChange={() =>
              dispatch(toggleAsyncTodo({ id, completed: !completed }))
            }
          ></input>
          <span>{title}</span>
        </span>
        <button
          onClick={() => dispatch(deleteAsyncTodo({ id }))}
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
