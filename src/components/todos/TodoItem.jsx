const TodoItem = () => {
  return (
    <li className={`list-group-item`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center gap-1">
          <input type="checkbox" className="mr-3"></input>
          <span>title</span>
        </span>
        <button className="btn btn-danger">Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
