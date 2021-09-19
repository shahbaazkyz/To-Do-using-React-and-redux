import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Todo from "./components/Todo/Todo";

const App = () => {

  const [myTodo, setTodo] = useState([]);

  useEffect(() => {
    const prevTodos = JSON.parse(localStorage.getItem("Todos"))
    if (prevTodos) {
      setTodo(prevTodos)
    }

  }, [])

  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(myTodo));
  }, [myTodo])



  return (
    <>
      <Header />
      <Todo  />
    </>
  );
};

export default App;
