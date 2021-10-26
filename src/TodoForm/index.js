import React from "react";
import { TodoContext } from "../TodoContext";
import { FaSave, FaTimes } from "react-icons/fa";
import './TodoForm.css';

function TodoForm () {
  const [ newTodoValue, setNewTodoValue ] = React.useState('');
  const {
    addTODO,
    setOpenModal,
  } = React.useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTODO(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>...</label>
      <textarea 
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar la cebolla para el almuerzo"
      />
      <div className="TodoForm-buttonContainer">
        <button
          className="TodoForm-button TodoForm-button-cancel"
          type="button"
          onClick={onCancel}
        >
          <FaTimes color="white" />
        </button>
        <button
          className="TodoForm-button TodoForm-button-add"
          type="submit"
        >
          <FaSave color="white" />
        </button>
      </div>
    </form>
  );
}

export { TodoForm };