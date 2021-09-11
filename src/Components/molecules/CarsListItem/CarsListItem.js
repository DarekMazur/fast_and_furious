import Button from '../../atoms/IconButton/IconButton';

const CarsListItem = ({ carsDetails: { make, model, year, id }, deleteCar }) => (
  <li>
    {make} {model} ({year}) <Button buttonType="edit" /> <Button onClick={() => deleteCar(id)} buttonType="del" />
  </li>
);

export default CarsListItem;
