import Logo from '../../../assets/svg/FaO_logo.svg';

import './Header.style.scss';

const Header = () => (
  <header className="container-fluid d-flex align-items-center justify-content-start">
    <img src={Logo} alt="Fast and Organized Logo" className="logo" />
  </header>
);

export default Header;
