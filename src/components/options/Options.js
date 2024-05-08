import React from "react";
import PropTypes from "prop-types";
import s from "./Options.module.css";

const Options = ({ options, onLeaveFeedback, total, onReset }) => {
  return (
    <div className={s.Wrap}>
      {options.map((option) => {
        return (
          <button
            key={option}
            type="button"
            className={s.Option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        );
      })}
      {total > 0 && (
        <button className={s.Option} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
};

Options.propTypes = {
  options: PropTypes.array.isRequired,
};

export default Options;
