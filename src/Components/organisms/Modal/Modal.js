import PropTypes from 'prop-types';
import AddButton from '../../atoms/AddButton/AddButton';
import FormField from '../../molecules/FormField/FromField';

const Modal = ({ make, model, year }) => (
  <form onSubmit={(e) => e.preventDefault()}>
    <div>
      <FormField field="make" content={make ? make : null} />
      <FormField field="model" content={model ? model : null} />
      <FormField field="year" content={year ? year : null} />
    </div>
    <AddButton onClick={() => console.log('clicked!')} />
  </form>
);

Modal.propTypes = {
  make: PropTypes.string,
  model: PropTypes.string,
  year: PropTypes.number,
};

export default Modal;