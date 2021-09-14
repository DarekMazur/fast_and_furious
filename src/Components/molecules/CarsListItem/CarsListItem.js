import { useContext } from 'react';
import { CarsContext } from '../../../providers/CarsProvider';
import Button from '../../atoms/IconButton/IconButton';

const CarsListItem = ({ carsDetails: { make, model, year, id } }) => {
  const { deleteCar } = useContext(CarsContext);
  const { editCar } = useContext(CarsContext);

  return (
    <li className="list-group-item d-flex align-items-center justify-content-between">
      {make} {model} ({year}){' '}
      <span>
        <Button buttonType="edit" onClick={() => editCar(id)} /> <Button onClick={() => deleteCar(id)} buttonType="del" />
      </span>
    </li>
  );
};

export default CarsListItem;
