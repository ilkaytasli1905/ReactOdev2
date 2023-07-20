import { useEffect, useState } from "react";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import Item from "../Item/item";
const Container = () => {
    const [text,setText] = useState("");
    const [todos,setTodos] = useState([]);    

    // Filtering and choosing which state i am gonna use
    useEffect(() => {
       
    }, [todos]);
      return (
        <>
            <section className="todoapp">
                <Header setText={setText} setTodos={setTodos} text={text}/>
                <Item todos={todos} setTodos={setTodos} />
                {/* <Footer/>  */}
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