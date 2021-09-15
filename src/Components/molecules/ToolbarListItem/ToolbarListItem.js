import { useContext } from 'react';
import { CarsContext } from '../../../providers/CarsProvider';
import Input from '../../atoms/Input/Input';
import Label from '../../atoms/Label/Label';

const ToolbarListItem = ({ id, model }) => {
  const { filterList } = useContext(CarsContext);

  return (
    <li key={id} className="list-group-item border-0">
      <Input type="checkbox" id={model} name={model} onChange={() => filterList(model)} />
      <Label id={model} label={model} />
    </li>
  );
};

export default ToolbarListItem;
