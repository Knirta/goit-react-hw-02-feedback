import PropTypes from "prop-types";

const Notification = ({ children }) => <p>{children}</p>;

Notification.propTypes = {
  children: PropTypes.string,
};

export default Notification;
