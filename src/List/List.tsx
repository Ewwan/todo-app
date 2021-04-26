import React from "react";
import { ITodo } from "./../App";

import "./List.scss";

interface ListProps {
  todos: ITodo[];
}

export default function List({ todos }): ListProps {
  return todos.map((todo: ITodo, index: number) => {
    return (
      <ul className="list" id="list">
        <li key={index} className={`list__item`} id={"li" + index}>
          <input
            className={`list__item__checkbox`}
            id={"input" + index}
            type="checkbox"
            value={todo.text}
          />
          <label htmlFor={"input" + index} className="list__item__label">
            {todo.text}
            <span className="list__item__checkbox-custom"></span>
          </label>
        </li>
      </ul>
    );
  });
}
