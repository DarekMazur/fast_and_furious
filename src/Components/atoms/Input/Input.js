import PropTypes from 'prop-types';

const Input = ({ name, id, type }) => <input name={name} id={id} type={type ? type : 'text'} placeholder=" " />;

Input.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Input;
