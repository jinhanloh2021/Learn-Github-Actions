import './HelpBox.css';
import PropTypes from "prop-types";

function HelpBox({ title, text }) {
  return (
    <article className="help-box">
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

HelpBox.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default HelpBox;
