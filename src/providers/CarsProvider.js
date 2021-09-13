import React, { useState, useEffect } from 'react';
import { carsArray as carsData } from '../utils/data/cars';

export const CarsContext = React.createContext({
  cars: [],
  filteredCars: [],
  uniqueModels: [],
  isLoading: null,
  handleAddCar: () => {},
  // handleEditCar: () => {},
  deleteCar: () => {},
  filterList: () => {},
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
  const [filteredCars, setFilteredCars] = useState([]);
  const [checkedModels, setCheckedModels] = useState([]);
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

  useEffect(() => {
    if (checkedModels.length === 0) {
      setFilteredCars(cars);
    } else {
      const newFilteredCars = [];
      checkedModels.forEach((model) => {
        newFilteredCars.push(...cars.filter((filteredCars) => filteredCars.model === model));
      });
      setFilteredCars(newFilteredCars);
    }
  }, [cars, checkedModels]);

  const uniqueModels = Array.from(new Set(cars.map((car) => car.model))).map((model) => {
    return {
      model,
      id: cars.find((car) => car.model === model).id,
    };
  });

  const deleteCar = (id) => {
    const filteredCars = cars.filter((cars) => cars.id !== id);
    setCars(filteredCars);
  };

  const filterList = (model) => {
    const newCheckedModels = [...checkedModels];
    if (newCheckedModels.includes(model)) {
      const index = newCheckedModels.indexOf(model);
      newCheckedModels.splice(index, 1);
    } else {
      newCheckedModels.push(model);
    }
    setCheckedModels(newCheckedModels);
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
        filteredCars,
        uniqueModels,
        isLoading,
        handleAddCar,
        // handleEditCar,
        deleteCar,
        filterList,
      }}
    >
      {children}
    </CarsContext.Provider>
  );
};

export default CarsProvider;
