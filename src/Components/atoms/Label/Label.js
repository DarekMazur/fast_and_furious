import PropTypes from 'prop-types';

const Label = ({ id, label }) => <label htmlFor={id}>{label}</label>;

Label.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Label;
