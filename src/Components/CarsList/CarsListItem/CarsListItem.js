import Button from '../../Button/Button';

const CarsListItem = ({ carsDetails }) => (
  <li>
    {carsDetails.make} {carsDetails.model} - {carsDetails.year} <Button buttonType="edit" /> <Button buttonType="del" />
  </li>
);

export default CarsListItem;
