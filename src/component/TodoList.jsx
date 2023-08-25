import React, { useState } from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
import data from "./Todo.json";
import Todo from "./Todo.jsx";

const TodoList = () => {
  const [index, setIndex] = useState(0);
  const percent = window.innerHeight * 0.47;
  const vh = percent / (data.length - 1);
  return (
    <>
      <div className="TodoList">
        <div className="Todos">
          <div className="arrow" style={{ top: `${vh * index + 3}px` }}>
            <BsChevronDoubleDown color={"white"} size={"15px"} />
          </div>
          {data.map((item, i) => (
            <Todo key={i} current={i} set={setIndex} />
          ))}
        </div>
        <div className="List" style={{ marginTop: `${vh * index}px` }}>
          {data[index].map((item) => (
            <span>{item}</span>
          ))}
        </div>
      </div>
    </>
  );
};

export default TodoList;
