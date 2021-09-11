import { useState, useEffect } from 'react';
import { carsArray as carsData } from '../../assets/data/cars';
import Button from '../Button/Button';
import CarsListItem from './CarsListItem/CarsListItem';

const CarsList = () => {
  const mockAPI = (success) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (carsData) {
          resolve([...carsData]);
        } else {
          reject({ message: 'Error' });
        }
      }, 800);
    });
  };

  const [cars, setCars] = useState([]);
  const [isLoading, setLoadingState] = useState([]);

  useEffect(() => {
    setLoadingState(true);
    mockAPI()
      .then((data) => {
        setLoadingState(false);
        setCars(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteCar = (id) => {
    const filterdCars = cars.filter((cars) => cars.id !== id);
    setCars(filterdCars);
  };

  return (
    <>
      <h2>{isLoading ? 'Loading...' : 'Car Lists'}</h2>
      <ul>
        {/* <li>
          <h3>Mark</h3> <h3>Model</h3> <h3>Year</h3>
        </li> */}
        {cars.map((carsDetails) => (
          <CarsListItem key={carsDetails.id} deleteCar={deleteCar} carsDetails={carsDetails} />
        ))}
        {isLoading ? null : <Button buttonType="add" />}
      </ul>
    </>
  );
};

export default CarsList;
