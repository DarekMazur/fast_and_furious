import PropTypes from 'prop-types';

const Input = ({ name, id, type, onChange }) => <input name={name} id={id} type={type ? type : 'text'} placeholder=" " onChange={onChange} />;

Input.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Input;
