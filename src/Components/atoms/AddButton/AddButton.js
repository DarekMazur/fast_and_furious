import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const AddButton = ({ isEdit }) => <Button type="submit">{isEdit ? 'Accept changes' : 'Add new car'}</Button>;

AddButton.propTypes = {
  isEdit: PropTypes.bool,
};

export default AddButton;
