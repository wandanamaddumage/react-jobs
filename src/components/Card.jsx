import PropTypes from "prop-types";

const Card = ({ children, bg = "bg-gray-100" }) => {
  return <div className={`p-6 rounded-lg shadow-md ${bg}`}>{children}</div>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  bg: PropTypes.string,
};

export default Card;
