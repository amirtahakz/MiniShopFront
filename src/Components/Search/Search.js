import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export function Search(props) {
  const [state, setState] = useState({ Products: {}, errors: {} });
  const history = useHistory();
  const submitHandler = (event) => {
    event.target.reset();
    event.preventDefault();
    history.push('/?name='+ state);
  };

  return (
    <form className="d-flex" onSubmit={submitHandler}>
      <input
        name="SearchValue"
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={e => setState(e.target.value)}
      />
      <button
        className="btn btn-outline-success"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}
