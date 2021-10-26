import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  return (
    <h2 className="TodoCounter" >Has completado {completedTodos} de {totalTodos} TODOs</h2>
  );
}

// Una buena practica es no usar export default porque pueden mal nombrar en el import
// mejor es forzar a los desarrolladores a llamarla como se debe con un export normal
export { TodoCounter };