import React from 'react'

function Footer({setFilter}) {


  return (
    <>
      <ul style={{listStyle:'none'}}>
        <li><a
            href="#/"
            onClick={() => {
              setFilter("all");
            }}
          >
            Hepsi
          </a></li>
          <li><a
            href="#/"
            onClick={() => {
              setFilter("completed");
            }}
          >
            Tamamlananlar
          </a></li>
          <li><a
            href="#/"
            onClick={() => {
              setFilter("unCompleted");
            }}
          >
            Hepsi
          </a></li>
      </ul>
    </>
  )
}

export default Footer