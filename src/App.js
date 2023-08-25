import React from "react";
import Image from "./component/Image";
import TodoList from "./component/TodoList";
import Header from "./component/Header";

const App = () => {
  return (
    <>
    <Header/>
      <Image />
      <TodoList />
    </>
  );
};

export default App;
