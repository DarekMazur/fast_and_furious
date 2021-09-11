import bin from '../../../assets/svg/bin.svg';

const Button = (props) => <button {...props}>{props.buttonType === 'del' ? <img src={bin} alt="Trash can" /> : props.buttonType}</button>;

export default Button;
