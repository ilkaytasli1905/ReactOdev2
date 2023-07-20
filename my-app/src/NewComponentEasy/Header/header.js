import React from 'react'

function Header({text,setText,setTodos}) {
  const onSubmit = (e) => {
    e.preventDefault();
    if(text === "") return;
    else setTodos((pre) => [...pre, {
      Id: new Date().getTime().toString(),
      Text: text,
      IsCompleted: false
    }]);
    setText("");
  }

  const onChange = (e) =>{
      setText(e.target.value);
  }

  return (
    <>
    <form onSubmit={onSubmit} >
      <input value={text} onChange={onChange}/>
    </form>
    </>
    
  )
}

export default Header