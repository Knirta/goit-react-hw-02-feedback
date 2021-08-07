import React from "react";
import s from "./Feedback.module.css";

const Feedback = ({ names, handler }) => {
  return (
    <>
      <h1>Please leave feedback</h1>
      {names.map((name) => {
        return (
          <button
            key={name}
            type="button"
            className={s.control}
            onClick={() => handler(name)}
          >
            {name}
          </button>
        );
      })}
    </>
  );
};

export default Feedback;
