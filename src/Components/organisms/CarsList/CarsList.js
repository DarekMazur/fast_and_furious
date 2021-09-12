import { useContext } from 'react';
import { CarsContext } from '../../../Views/Root';
import Button from '../../atoms/IconButton/IconButton';
import CarsListItem from '../../molecules/CarsListItem/CarsListItem';

const CarsList = () => {
  const context = useContext(CarsContext);

  return (
    <>
      <h2>{context.isLoading ? 'Loading...' : null}</h2>
      <ul>
        {context.cars.map((carsDetails) => (
          <CarsListItem key={carsDetails.id} deleteCar={context.deleteCar} carsDetails={carsDetails} />
        ))}
        {context.isLoading ? null : <Button buttonType="add" />}
      </ul>
    </>
  );
};

export default CarsList;
