import React, { useState, useContext } from "react";
import Context from "../context/context";

export const AddTodo = () => {
  const { handleSubmit, setValue, setDeadline, value } = useContext(Context);

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
