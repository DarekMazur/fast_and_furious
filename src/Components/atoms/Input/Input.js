import PropTypes from 'prop-types';

const Input = ({ name, id, type = 'text', value, onChange, isRequired }) => {
  return <input name={name} id={id} type={type} value={value} onChange={onChange} required={isRequired} />;
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Input;
