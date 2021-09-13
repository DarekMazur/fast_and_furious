import { useContext } from 'react';
import { CarsContext } from '../../../providers/CarsProvider';
import Input from '../../atoms/Input/Input';
import Label from '../../atoms/Label/Label';

const ToolBar = () => {
  const { filterList } = useContext(CarsContext);
  const { uniqueModels } = useContext(CarsContext);

  return (
    <div>
      <h3>Tool Bar</h3>
      <h4>Filter</h4>
      <ul>
        {uniqueModels.map((carsDetails) => (
          <li key={carsDetails.id}>
            <Input type="checkbox" id={carsDetails.model} name={carsDetails.model} onChange={() => filterList(carsDetails.model)} />
            <Label id={carsDetails.model} label={carsDetails.model} />
          </li>
        ))}
      </ul>
      <h4>Sort by:</h4>
      <select name="sort-options" id="sort-options">
        <option value=" "></option>
        <option value="make">Mark</option>
        <option value="model">Model</option>
        <option value="year">Year</option>
      </select>
    </div>
  );
};

export default ToolBar;
