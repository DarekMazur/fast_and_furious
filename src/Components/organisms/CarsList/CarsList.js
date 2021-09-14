import { useContext } from 'react';
import { CarsContext } from '../../../providers/CarsProvider';
import IconButton from '../../atoms/IconButton/IconButton';
import Title from '../../atoms/Title/Title';
import CarsListItem from '../../molecules/CarsListItem/CarsListItem';

const CarsList = () => {
  const context = useContext(CarsContext);
  const { handleModalOpen } = useContext(CarsContext);

  const handleOnClick = () => {
    handleModalOpen();
  };

  return (
    <div className="container-fluid w-75">
      <Title>Car List</Title>
      <div className="contener-fluid d-flex justify-content-center w-50">
        {context.isLoading ? <span className="spinner-border" role="status"></span> : null}
      </div>
      <ul className="list-group w-50">
        {context.filteredCars.map((carsDetails) => (
          <CarsListItem key={carsDetails.id} carsDetails={carsDetails} />
        ))}
      </ul>
      {context.isLoading ? null : <IconButton buttonType="add" onClick={handleOnClick} />}
    </div>
  );
};

export default CarsList;
