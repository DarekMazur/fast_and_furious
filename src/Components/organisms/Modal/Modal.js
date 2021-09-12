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
        <FormField field="make" content={make ? make : null} onChange={handleInputChange} />
        <FormField field="model" content={model ? model : null} onChange={handleInputChange} />
        <FormField field="year" content={year ? year : null} onChange={handleInputChange} />
      </div>
      <AddButton />
    </form>
  );
};

export default Modal;
