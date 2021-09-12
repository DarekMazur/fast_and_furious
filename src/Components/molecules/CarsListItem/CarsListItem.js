import { useContext } from 'react';
import { CarsContext } from '../../../providers/CarsProvider';
import Button from '../../atoms/IconButton/IconButton';

const CarsListItem = ({ carsDetails: { make, model, year, id } }) => {
  const { deleteCar } = useContext(CarsContext);

  return (
    <li>
      {make} {model} ({year}) <Button buttonType="edit" /> <Button onClick={() => deleteCar(id)} buttonType="del" />
    </li>
  );
};

export default CarsListItem;
