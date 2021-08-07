import React from "react";
import PropTypes from "prop-types";
import s from "./Container.module.css";

const Container = ({ children }) => {
  return <div className={s.Container}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
