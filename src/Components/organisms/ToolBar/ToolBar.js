import { useContext } from 'react';
import { CarsContext } from '../../../providers/CarsProvider';
import ToolbarListItem from '../../molecules/ToolbarListItem/ToolbarListItem';

const ToolBar = () => {
  const { uniqueModels } = useContext(CarsContext);
  const { sortCars } = useContext(CarsContext);

  return (
    <div className="container-fluid w-25">
      <h3>Tool Bar</h3>
      <h4 className="mt-4">Filter</h4>
      <ul className="list-group">
        {uniqueModels.map((carsDetails) => (
          <ToolbarListItem id={carsDetails.id} model={carsDetails.model} />
        ))}
      </ul>
      <h4 className="mt-4">Sort by:</h4>
      <select name="sort-options" id="sort-options" onChange={sortCars}>
        <option value="">Choose an option:</option>
        <option value="make">Mark</option>
        <option value="model">Model</option>
        <option value="year">Year</option>
      </select>
    </div>
  );
};

export default ToolBar;
