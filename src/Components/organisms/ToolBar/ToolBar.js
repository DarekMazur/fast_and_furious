import { useContext } from 'react';
import { CarsContext } from '../../../providers/CarsProvider';
import Input from '../../atoms/Input/Input';
import Label from '../../atoms/Label/Label';

const ToolBar = () => {
  const { filterList } = useContext(CarsContext);
  const { uniqueModels } = useContext(CarsContext);
  const { sortCars } = useContext(CarsContext);

  return (
    <div className="container-fluid w-25">
      <h3>Tool Bar</h3>
      <h4>Filter</h4>
      <ul className="list-group">
        {uniqueModels.map((carsDetails) => (
          <li key={carsDetails.id} className="list-group-item border-0">
            <Input type="checkbox" id={carsDetails.model} name={carsDetails.model} onChange={() => filterList(carsDetails.model)} />
            <Label id={carsDetails.model} label={carsDetails.model} />
          </li>
        ))}
      </ul>
      <select name="sort-options" id="sort-options" onChange={sortCars}>
        <option value=" ">Sort by:</option>
        <option value="make">Mark</option>
        <option value="model">Model</option>
        <option value="year">Year</option>
      </select>
    </div>
  );
};

export default ToolBar;
