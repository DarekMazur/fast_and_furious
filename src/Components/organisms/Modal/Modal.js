import PropTypes from 'prop-types';
import { useState, useEffect, useContext } from 'react';
import { CarsContext } from '../../../providers/CarsProvider';
import AddButton from '../../atoms/AddButton/AddButton';
import CloseButton from '../../atoms/CloseButton/CloseButton';
import FormField from '../../molecules/FormField/FromField';

import './Modal.style.scss';

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
    editCarItem.length = 0;
    handleEditCar(formValues);
    setFormValues(initialFormState);
  };

  const handleCloseModal = () => {
    setFormValues(initialFormState);
    editCarItem.length = 0;
    handleModalOpen();
  };

  return (
    <div className="modalForm container-fluid justify-content-center p-5">
      <form onSubmit={editCarItem.length !== 0 ? handleSubmitEdit : handleSubmitCar} className="p-5 bg-light modalForm__form">
        <div className="d-flex flex-column">
          <FormField field="make" value={formValues.make} onChange={handleInputChange} isRequired />
          <FormField field="model" value={formValues.model} onChange={handleInputChange} isRequired />
          <FormField field="year" value={formValues.year} onChange={handleInputChange} isRequired />
        </div>
        <div className="d-flex mt-4">
          <AddButton isEdit={editCarItem.length !== 0} />
          <CloseButton onClick={handleCloseModal} />
        </div>
      </form>
    </div>
  );
};

Modal.propTypes = {
  make: PropTypes.string,
  model: PropTypes.string,
  year: PropTypes.number,
};

export default Modal;
