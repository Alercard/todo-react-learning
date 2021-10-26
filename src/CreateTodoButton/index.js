import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton({setOpenModal}) {
  const onClickButton = (msg) => {
    setOpenModal(prevState => !prevState);
  }
  return (
    <button 
      className="CreateTodoButton"
      onClick={()=>onClickButton('Nuevo TODO en Construccion!')}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
