import React from "react";
import { useLocalStorage } from "./useLocalStorage";
/*
  Al crear un contexto, usamos React.createContext
  Genera un Provider y un Consumer
 */
const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    item: todos, 
    saveItem: saveTodos, 
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);
  
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  
  let searchedTodos = [];

  if (searchValue.length > 0) {

    searchedTodos = todos.filter(todo => {

      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);

    });

  } else {
    searchedTodos = todos;
  }

  const completeTODO = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text===text);
    // inyectamos los todos a la nueva variable
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    // al invocar a setTodos se ejecuta el re-render
    saveTodos(newTodos);

    // no se puede hacer render si se modigican directamente los estados
    // todos[todoIndex].completed = true;
  };

  const addTODO = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text: text,
      key: text
    });
    // al invocar a setTodos se ejecuta el re-render
    saveTodos(newTodos);

    // no se puede hacer render si se modigican directamente los estados
    // todos[todoIndex].completed = true;
  };

  const deleteTODO = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text===text);
    const newTodos = [...todos];
    // sacamos el elemento con splice
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);

  }

  // value debe llevar todas las propiedades a compartir
  // para objetos se usan doble llaves
  return (
    <TodoContext.Provider value={{
      loading,
      error,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      addTODO,
      completeTODO,
      deleteTODO,
      openModal,
      setOpenModal
    }}>
      {props.children}
    </TodoContext.Provider>
  );
} 

/*<TodoContext.Consumer></TodoContext.Consumer>*/
export { TodoContext, TodoProvider };