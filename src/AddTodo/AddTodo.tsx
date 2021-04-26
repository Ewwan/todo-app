import React from "react";

import "./AddTodo.scss";

interface AddTodoProps {
  handleSubmit: (e: any) => void;
  setEventTargetValue: (e: any) => void;
  value: string;
}

const AddTodo = ({
  handleSubmit,
  setEventTargetValue,
  value
}: AddTodoProps): React.ReactElement => {
  return (
    <div className="add-todo">
      <div>
        <form onSubmit={handleSubmit} className="add-todo__form">
          <input
            className="add-todo__form__input-field"
            placeholder="Add task..."
            type="text"
            value={value}
            onChange={(e) => setEventTargetValue(e)}
            required
          />
          <button type="submit" className="add-todo__button">
            +
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
