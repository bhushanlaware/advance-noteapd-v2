import Board from "@UI/components/Todo/Board";
import * as React from "react";
export interface TodoProps {}

const Todo: React.FC<TodoProps> = () => {
  return <Board></Board>;
};

export default Todo;
