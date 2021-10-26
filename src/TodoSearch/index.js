import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {

  const {searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input 
      placeholder="Cebolla" 
      className="TodoSearch" 
      value={searchValue}
      onChange={ onSearchValueChange }
    />
  );
  /* otra opcion a render es con parametros en donde el 2do parametro es un parrafo que se presentara despues del primer elemento
  return [
    <input 
      placeholder="Cebolla" 
      className="TodoSearch" 
      value={searchValue}
      onChange={ onSearchValueChange }
    />,
    <p>{ searchValue }</p>
  ];
  */
}

export { TodoSearch };
