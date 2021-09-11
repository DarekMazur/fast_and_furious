import { useState, useEffect } from 'react';
import { carsArray as carsData } from '../../assets/data/cars';
import Button from '../Button/Button';
import CarsListItem from './CarsListItem/CarsListItem';

const CarsList = () => {
  const [cars, setCars] = useState(carsData);

  const deleteCar = (id) => {
    const filterdCars = cars.filter((cars) => cars.id !== id);
    setCars(filterdCars);
  };

  return (
    <ul>
      <li>
        <h3>Mark</h3> <h3>Model</h3> <h3>Year</h3>
      </li>
      {cars.map((carsDetails) => (
        <CarsListItem key={carsDetails.id} deleteCar={deleteCar} carsDetails={carsDetails} />
      ))}
      <Button buttonType="add" />
    </ul>
  );
};

export default CarsList;
