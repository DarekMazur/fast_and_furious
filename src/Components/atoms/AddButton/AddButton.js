import PropTypes from 'prop-types';

const AddButton = ({ isEdit, onClick }) => (
  <button type="submit" onClick={onClick}>
    {isEdit ? 'Accept changes' : 'Add new car'}
  </button>
);

AddButton.propTypes = {
  isEdit: PropTypes.bool,
};

export default AddButton;
