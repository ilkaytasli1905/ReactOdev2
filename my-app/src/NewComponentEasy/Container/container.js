import {useState,useEffect} from 'react'
import Item from '../Item/item'
import Header from '../Header/header'
import Footer from '../Footer/footer'

function Container() {

  const [text,setText] = useState("");
  const [todos,setTodos] = useState([]);
  const [filteredTodos,setFilteredTodos] = useState([]);
  const [filter,setFilter] = useState("all");

   // Filtering and choosing which state i am gonna use
   useEffect(() => {
    if(filter === "all") setFilteredTodos(todos);
    if(filter === "completed") setFilteredTodos(todos.filter((todo) => {return todo.IsCompleted}));
    if(filter === "unCompleted") setFilteredTodos(todos.filter((todo) => {return !todo.IsCompleted}));
}, [todos, filter]);

  return (
    <>
        <Header text={text} setText={setText} setTodos={setTodos}/>
        <Item todos={todos} setTodos={setTodos} filteredTodos = {filteredTodos}/>
        <Footer setFilter={setFilter}/>
    </>
  )
}

export default Container