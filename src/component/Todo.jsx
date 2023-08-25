import React from "react";

const Todo = ({ current, set }) => {
  return (
    <div className="Todo">
      <div className="circle" onClick={() => set(current)}></div>
    </div>
  );
};

export default Todo;
