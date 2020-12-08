import React, { useContext } from "react";
import Context from "../Context";

function Person({ firstName, lastName, id }) {
  const { check } = useContext(Context);
  let style = {};

  let lname;
  if (firstName && lastName) {
    lname = `${lastName} ${firstName}`;
  } else {
    lname = "---";
    style = {
      input: {
        display: "none",
      },
    };
  }

  return (
    <p>
      <strong>{lname}</strong>
      <input
        onClick={check.bind(null, id)}
        type="checkbox"
        style={style.input}
      ></input>
    </p>
  );
}

export default Person;
