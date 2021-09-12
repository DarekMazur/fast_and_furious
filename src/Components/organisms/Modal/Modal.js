import PropTypes from 'prop-types';
import { useState } from 'react';
import { useContext } from 'react/cjs/react.development';
import { CarsContext } from '../../../providers/CarsProvider';
import AddButton from '../../atoms/AddButton/AddButton';
import FormField from '../../molecules/FormField/FromField';

const initialFormState = {
  make: '',
  model: '',
  year: '',
  id: '',
};

const Modal = ({ make, model, year }) => {
  const [formValues, setFormValues] = useState(initialFormState);
  const { handleAddCar } = useContext(CarsContext);

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitCar = (e) => {
    e.preventDefault();
    handleAddCar(formValues);
    setFormValues(initialFormState);
  };

  return (
    <form onSubmit={handleSubmitCar}>
      <div>
        <FormField field="make" value={formValues.make} onChange={handleInputChange} />
        <FormField field="model" value={formValues.model} onChange={handleInputChange} />
        <FormField field="year" value={formValues.year} onChange={handleInputChange} />
      </div>
      <AddButton />
    </form>
  );
};

Modal.propTypes = {
  make: PropTypes.string,
  model: PropTypes.string,
  year: PropTypes.number,
};

export default Modal;
