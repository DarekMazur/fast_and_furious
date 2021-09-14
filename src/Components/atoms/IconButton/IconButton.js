import bin from '../../../assets/svg/bin.svg';
import edit from '../../../assets/svg/edit.svg';
import add from '../../../assets/svg/add.svg';

import './IconButton.style.scss';

const IconButton = ({ onClick, buttonType }) => (
  <button onClick={onClick} className="mx-2 iconButton bg-warning">
    {buttonType === 'del' || buttonType === 'edit' ? (
      buttonType === 'del' ? (
        <img src={bin} alt="Trash can" className="iconButton__icon" />
      ) : (
        <img src={edit} alt="Edit pad" className="iconButton__icon" />
      )
    ) : (
      <img src={add} alt="Add new item" className="iconButton__icon" />
    )}
  </button>
);

export default IconButton;
