import React from "react";
import PropTypes from "prop-types";
import s from "./Statistics.module.css";

const Statisctics = ({ feedbacks, total, positivePercentage }) => {
  return (
    <>
      {feedbacks.map(([name, voices]) => {
        return (
          <p key={name} className={s.Text}>
            {name}: <span>{voices}</span>
          </p>
        );
      })}
      <p className={s.Text}>Total: {total}</p>
      <p className={s.Text}>Positive feedbacks: {positivePercentage}%</p>
    </>
  );
};

Statisctics.propTypes = {
  feedbacks: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statisctics;
