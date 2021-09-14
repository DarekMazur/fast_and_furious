import { useContext } from 'react';
import { CarsContext } from '../../../providers/CarsProvider';
import IconButton from '../../atoms/IconButton/IconButton';
import CarsListItem from '../../molecules/CarsListItem/CarsListItem';

const CarsList = () => {
  const context = useContext(CarsContext);
  const { handleModalOpen } = useContext(CarsContext);

  const handleOnClick = () => {
    handleModalOpen();
  };

  return (
    <>
      <h2>{context.isLoading ? 'Loading...' : null}</h2>
      <ul>
        {context.filteredCars.map((carsDetails) => (
          <CarsListItem key={carsDetails.id} carsDetails={carsDetails} />
        ))}
        {context.isLoading ? null : <IconButton buttonType="add" onClick={handleOnClick} />}
      </ul>
    </>
  );
};

export default CarsList;
