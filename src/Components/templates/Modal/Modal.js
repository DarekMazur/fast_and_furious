import PropTypes from 'prop-types';
import AddButton from '../../atoms/AddButton/AddButton';
import Input from '../../atoms/Input/Input';
import Label from '../../atoms/Label/Label';

const Modal = ({ make, model, year }) => (
  <form>
    <Label id="make" label="Mark" />
    <Input name="make" id="make">
      {make ? make : ''}
    </Input>

    <Label id="model" label="Model" />
    <Input name="model" id="model">
      {model ? model : ''}
    </Input>

    <Label id="year" label="Year" />
    <Input name="year" id="year">
      {year ? year : ''}
    </Input>

    <AddButton />
  </form>
);

Modal.propTypes = {
  make: PropTypes.string,
  model: PropTypes.string,
  year: PropTypes.number,
};

export default Modal;
