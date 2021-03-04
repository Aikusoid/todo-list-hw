import React, { useState } from "react";

export const AddTodo = ({ onCreate }) => {
  const [value, setValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (value.trim()) {
      onCreate(value);
      setValue("");
    }
  }

  return (
    <form className="mb-3" onSubmit={handleSubmit}>
      <input
        className="form-control"
        type="text"
        placeholder="Zadejte úkol"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </form>
  );
};
