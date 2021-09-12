import React, { useState, useEffect } from 'react';
import MainTemplate from '../Components/templates/MainTemplate/MainTemplate';
import { carsArray as carsData } from '../utils/data/cars';
import Dashboard from './Dashboard';

export const CarsContext = React.createContext({
  cars: [],
  isLoading: null,
  // handleAddCar: () => {},
  deleteCar: () => {},
});

const Root = () => {
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
    <CarsContext.Provider
      value={{
        cars,
        isLoading,
        // handleAddCar,
        deleteCar,
      }}
    >
      <MainTemplate>
        <Dashboard />
      </MainTemplate>
    </CarsContext.Provider>
  );
};

export default Root;
