import React, { useState, useEffect } from 'react';
import { carsArray as carsData } from '../utils/data/cars';

export const CarsContext = React.createContext({
  cars: [],
  isLoading: null,
  handleAddCar: () => {},
  // handleEditCar: () => {},
  deleteCar: () => {},
});

const CarsProvider = ({ children }) => {
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

  const handleAddCar = (values) => {
    const newCar = {
      make: values.make,
      model: values.model,
      year: values.year,
      id: Date.now(),
    };
    setCars([newCar, ...cars]);
  };

  return (
    <CarsContext.Provider
      value={{
        cars,
        isLoading,
        handleAddCar,
        // handleEditCar,
        deleteCar,
      }}
    >
      {children}
    </CarsContext.Provider>
  );
};

export default CarsProvider;
