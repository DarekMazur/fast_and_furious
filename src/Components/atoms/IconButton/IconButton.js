import bin from '../../../assets/svg/bin.svg';
import edit from '../../../assets/svg/edit.svg';
import add from '../../../assets/svg/add.svg';

const Button = (props) => (
  <button {...props}>
    {props.buttonType === 'del' || props.buttonType === 'edit' ? (
      props.buttonType === 'del' ? (
        <img src={bin} alt="Trash can" />
      ) : (
        <img src={edit} alt="Edit pad" />
      )
    ) : (
      <img src={add} alt="Add new item" />
    )}
  </button>
);

export default Button;
