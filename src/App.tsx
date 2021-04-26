import React, { Fragment, useState } from "react";
import AddTodo from "./AddTodo";
import List from "./List";

import "./App.scss";

export type FormElement = React.FormEvent<HTMLFormElement>;

export interface ITodo {
  text: string;
  complete: boolean;
}

export default function App() {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = (text: string) => {
    const newTodos: ITodo[] = [...todos, { text, complete: false }];
    setTodos(newTodos);
  };

  const handleSubmit = (e: FormElement): void => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  const setEventTargetValue = (e: any) => setValue(e.target.value);

  const currentDay = () => {
    const date = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };

    return date.toLocaleDateString("en-GB", options);
  };

  return (
    <Fragment>
      <div className="app">
        <div className="app__title">
          <h2>{currentDay()}</h2>
        </div>
        {AddTodo({ handleSubmit, setEventTargetValue, value })}
        <section className="app__section">{List({ todos })}</section>
      </div>
    </Fragment>
  );
}
