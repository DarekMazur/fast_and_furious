import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useContext } from 'react/cjs/react.development';
import { CarsContext } from '../../../providers/CarsProvider';
import AddButton from '../../atoms/AddButton/AddButton';
import CloseButton from '../../atoms/CloseButton/CloseButton';
import FormField from '../../molecules/FormField/FromField';

const initialFormState = {
  make: '',
  model: '',
  year: '',
  id: '',
};

const Modal = () => {
  const { handleAddCar } = useContext(CarsContext);
  const { editCarItem } = useContext(CarsContext);
  const { handleEditCar } = useContext(CarsContext);
  const { handleModalOpen } = useContext(CarsContext);
  const [formValues, setFormValues] = useState(initialFormState);

  useEffect(() => {
    setFormValues({ ...editCarItem });
  }, [editCarItem]);

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

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    handleModalOpen();
    editCarItem.length = 0;
    handleEditCar(formValues);
    setFormValues(initialFormState);
  };

  return (
    <form onSubmit={editCarItem.length !== 0 ? handleSubmitEdit : handleSubmitCar}>
      <div>
        <FormField field="make" value={formValues.make} onChange={handleInputChange} isRequired />
        <FormField field="model" value={formValues.model} onChange={handleInputChange} isRequired />
        <FormField field="year" value={formValues.year} onChange={handleInputChange} isRequired />
      </div>
      <div>
        <AddButton isEdit={editCarItem.length !== 0} />
        <CloseButton onClick={handleModalOpen} />
      </div>
    </form>
  );
};

Modal.propTypes = {
  make: PropTypes.string,
  model: PropTypes.string,
  year: PropTypes.number,
};

export default Modal;
