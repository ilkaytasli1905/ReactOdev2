import { useEffect, useState } from "react";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import Item from "../Item/item";
const Container = () => {

    //State definitions
    const [text, setText] = useState("");
    const [todos, setTodos] = useState([]);
    const [myStatus, setMyStatus] = useState("all");
    const [filterTodo, setFilterTodo] = useState([]);
    const [counter, setCounter] = useState(0)


    // Filtering and choosing which state i am gonna use
    useEffect(() => {
        if (myStatus === "active")
            setFilterTodo(todos.filter((perTodo) => perTodo.isChecked === false));
        else if (myStatus === "completed")
            setFilterTodo(todos.filter((perTodo) => perTodo.isChecked === true));
        else setFilterTodo(todos);
        const myCounter = todos.filter((counterTodo) => counterTodo.isChecked === false)
        setCounter(myCounter.length)
    }, [todos, myStatus]);

    return (
        <>
            <section className="todoapp">
                <Header setText={setText} setTodos={setTodos} text={text} />
                <Item filterTodo={filterTodo} setTodos={setTodos} todos={todos} />
                <Footer setMyStatus={setMyStatus} counter={counter} myStatus={myStatus} todos={todos} setTodos={setTodos} />
            </section>
            <footer className="info">
                <p>Click to edit a todo</p>
                <p>
                    Created by <a>İlkay Taşlı</a>
                </p>
                <p>
                    Part of <a>TodoMVC</a>
                </p>
            </footer>
        </>
    );
};
export default Container;