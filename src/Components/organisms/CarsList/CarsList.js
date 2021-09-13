import { useContext } from 'react';
import { CarsContext } from '../../../providers/CarsProvider';
import Button from '../../atoms/IconButton/IconButton';
import CarsListItem from '../../molecules/CarsListItem/CarsListItem';

const CarsList = () => {
  const context = useContext(CarsContext);

  return (
    <>
      <h2>{context.isLoading ? 'Loading...' : null}</h2>
      <ul>
        {context.filteredCars.map((carsDetails) => (
          <CarsListItem key={carsDetails.id} carsDetails={carsDetails} />
        ))}
        {context.isLoading ? null : <Button buttonType="add" />}
      </ul>
    </>
  );
};

export default CarsList;
