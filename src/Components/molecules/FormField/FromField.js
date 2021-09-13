import PropTypes from 'prop-types';
import Input from '../../atoms/Input/Input';
import Label from '../../atoms/Label/Label';

const FormField = ({ field, value, onChange, isRequired }) => {
  const capitalizeFirsLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <>
      <Label id={field} label={field === 'make' ? 'Mark' : capitalizeFirsLetter(field)} />
      <Input name={field} id={field} onChange={onChange} value={value} isRequired={isRequired} />
    </>
  );
};

FormField.propTypes = {
  field: PropTypes.string.isRequired,
};

export default FormField;
