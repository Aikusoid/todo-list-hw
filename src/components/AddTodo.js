import React, { useState } from "react";

export const AddTodo = ({ onCreate }) => {
  const [value, setValue] = useState("");
  const [deadline, setDeadline] = useState(Date.now() + 86400000);

  function handleSubmit(event) {
    event.preventDefault();
    if (value.trim()) {
      onCreate(value, deadline);

      setValue("");
      setDeadline(Date.now() + 86400000);
    }
  }

  return (
    <form className="mb-3" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-labe pl-1">Text připomínky</label>
        <input
          className=" form-control"
          type="text"
          placeholder="Zadejte úkol"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label pl-1">Čas připomenutí</label>
        <input
          type="datetime-local"
          className="form-control time"
          onChange={(event) => setDeadline(new Date(event.target.value))}
        />
      </div>
      <input type="submit" className="btn btn-primary" value="Vytvořit úkol" />
    </form>
  );
};
