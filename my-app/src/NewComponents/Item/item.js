import { useState } from "react";
const Item = ({ setTodos, todos }) => {

  
  //çarpının tıklanması
const removeHandler = (id)=>{
  const newTodos = todos.filter((e)=>{return e.id !== id});
  setTodos(newTodos);
}
//chekbox seçilmesi
 //Checkbox Handler.
 const checkboxHandler = (id) => {
  setTodos((prevTodo) =>
    prevTodo.map((perPrevTodo) => {
      return perPrevTodo.id === id
        ? { ...perPrevTodo, isChecked: !perPrevTodo.isChecked }
        : perPrevTodo;
    })
  );
};

//tümünün seçilmesi
const [toggleState, setToggleState] = useState(false);

//Select all todos 
const toggleAll = () => {
  console.log(todos);
  const newTodos =   todos.map((perTodos) => {
      if (toggleState === false) {
        setToggleState(true);
        return { ...perTodos, isChecked: true };
      }
      else  {
          setToggleState(false);
        return { ...perTodos, isChecked: false };
      }
    })
    setTodos(newTodos)

};

  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all" onClick={toggleAll} >
        Mark all as complete
      </label>
      <ul className="todo-list">
        {todos.map((todo) => {      
          return (
            <li className={todo.isChecked === true ? "completed" : ""} key={todo.id}>
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox" 
                  checked={todo.isChecked}
                  onChange={() => checkboxHandler(todo.id)}
                  
                />
               <label>{todo.text}</label>
                <button
                  className="destroy"   
                  onClick={() => removeHandler(todo.id)}              
                ></button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default Item;