import PropTypes from 'prop-types';

const Input = ({ name, id, type = 'text', value, onChange }) => {
  return <input name={name} id={id} type={type} value={value} onChange={onChange} />;
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Input;
