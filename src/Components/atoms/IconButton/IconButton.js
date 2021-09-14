import bin from '../../../assets/svg/bin.svg';
import edit from '../../../assets/svg/edit.svg';
import add from '../../../assets/svg/add.svg';

const IconButton = ({ onClick, buttonType }) => (
  <button onClick={onClick} style={{ width: '40px', height: '40px' }}>
    {buttonType === 'del' || buttonType === 'edit' ? (
      buttonType === 'del' ? (
        <img src={bin} alt="Trash can" style={{ width: '30px', height: '30px' }} />
      ) : (
        <img src={edit} alt="Edit pad" style={{ width: '30px', height: '30px' }} />
      )
    ) : (
      <img src={add} alt="Add new item" style={{ width: '30px', height: '30px' }} />
    )}
  </button>
);

export default IconButton;
