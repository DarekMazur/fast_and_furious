import { carsArray } from '../../assets/data/cars';
import Button from '../Button/Button';
import CarsListItem from './CarsListItem/CarsListItem';

const CarsList = () => (
  <>
    {carsArray.map((carsDetails) => (
      <CarsListItem carsDetails={carsDetails} />
    ))}
    <Button buttonType="add" />
  </>
);

export default CarsList;
