import React from "react";
import { AppUI } from "../App/AppUI";
//import logo from './logo.svg';
//import './App.css';
/*
const defaultTodos = [
  {text: "Cortar Cebolla", completed: true},
  {text: "Tomar Curso Intro React", completed: false},
  {text: "Llorar con la Llorona", completed: false},
];
*/
// hook personalizado
function useLocalStorage(itemName, initialValue) {

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(
    () => {
      setTimeout(() => {
        try {

          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
          
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
          setItem(parsedItem);
          setLoading(false);
            
        } catch (err) {
          setError(err)
        }
      }, 2000);
    }
  );
    

  const saveItem = (newItem) => {
    try {

      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
        
    } catch (err) {
      setError(err)      
    }
  }
  // por convencion, si solo se retornara 2 valores, se usa un array
  /*
  return [
    item,
    saveItem
  ];
  */
  // por convencion, si se retornaran mas de 2 valores, se debe retornar un objeto
  return {
    item,
    saveItem,
    loading,
    error
  };
}

function App() {

  //const [patito, savePatito] = useLocalStorage('PATITO_V2', 'PatitoTODO');
  const {
    item: todos, 
    saveItem: saveTodos, 
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);
  
  const [searchValue, setSearchValue] = React.useState('');

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

  const deleteTODO = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text===text);
    const newTodos = [...todos];
    // sacamos el elemento con splice
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);

  }

  // ejecutara el codigo enviada  despues de renderizar
  //React.useLayoutEffect
  /*
  console.log('RENDER ANTES DE USE EFFECT');
  // ejecutara el codigo enviada por dentro antes de renderizar
  React.useEffect( () => {
    console.log('USE EFFECT');
  }, 
  // el segundo parametro es para indicar cuando debe ejecutarse
  // si va vacio, solo se renderiza una vez al cargar la imagen
  // se indican los elementos que deseamos se vigilen para realizar render al modificarse o cambiar
  [totalTodos] 
  );
  console.log('RENDER DESPUES DE USE EFFECT');
  */
  /*
  return [
    <p>{patito}</p>,
    <AppUI 
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTODO={completeTODO}
      deleteTODO={deleteTODO}
    />
  ];
  */
  return (
    <AppUI 
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTODO={completeTODO}
      deleteTODO={deleteTODO}
    />
  );
}

export default App;
