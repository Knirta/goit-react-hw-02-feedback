import React from "react";
import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ names, onLeaveFeedback }) => {
  return (
    <>
      {names.map((name) => {
        return (
          <button
            key={name}
            type="button"
            className={s.Option}
            onClick={() => onLeaveFeedback(name)}
          >
            {name}
          </button>
        );
      })}
    </>
  );
};

FeedbackOptions.propTypes = {
  names: PropTypes.array.isRequired,
};

export default FeedbackOptions;
