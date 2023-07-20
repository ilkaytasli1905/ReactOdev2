import React from 'react'

function Item({todos,setTodos,filteredTodos}) {

  const onChange = (id)=>{

      setTodos(todos.map((todo) => { return todo.Id === id ? {...todo, IsCompleted:!todo.IsCompleted} : todo}));
  }
  return (
    <>
    <ul>
      {filteredTodos.map((todo)=>{return (
      <li className={todo.IsCompleted? "completed": "unCompleted"}key={todo.Id}>
        <div>
          <input 
          type='checkbox' 
          onChange={() => onChange(todo.Id)}
          checked={todo.IsCompleted}/> 
        <label>{todo.Text}</label>
        </div>
        </li>)})}
      </ul>
    </>    
  )
}

export default Item