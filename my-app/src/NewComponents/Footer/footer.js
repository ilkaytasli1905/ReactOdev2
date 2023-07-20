
const Footer = ({ myStatus, setMyStatus ,todos,setTodos,counter}) => {
	
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{counter} </strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <a
            href="#/"
            className={myStatus === "all" ? "selected" : ""}
            onClick={() => {
              setMyStatus("all");
            }}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={myStatus === "active" ? "selected" : ""}
            onClick={() => {
              setMyStatus("active");
            }}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={myStatus === "completed" ? "selected" : ""}
            onClick={() => {
              setMyStatus("completed");
            }}
          >
            Completed
          </a>
        </li>
      </ul>
     <button className="clear-completed">Clear completed</button>
    </footer>
  );
};
export default Footer;