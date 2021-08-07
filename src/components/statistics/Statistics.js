import React from "react";
import s from "./Statistics.module.css";

const Statisctics = ({ feedbacks }) => {
  return (
    <>
      <h2>Statistics</h2>

      {feedbacks.map(([name, voices]) => {
        return (
          <p key={name} className={s.text}>
            {name}: <span>{voices}</span>
          </p>
        );
      })}
    </>
  );
};

export default Statisctics;
