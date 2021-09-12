import PropTypes from 'prop-types';

const AddButton = ({ isEdit }) => <button>{isEdit ? 'Accept changes' : 'Add new car'}</button>;

AddButton.propTypes = {
  isEdit: PropTypes.bool,
};

export default AddButton;
