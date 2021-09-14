import PropTypes from 'prop-types';

const Label = ({ id, label, className }) => (
  <label htmlFor={id} className={className}>
    {label}
  </label>
);

Label.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Label;
