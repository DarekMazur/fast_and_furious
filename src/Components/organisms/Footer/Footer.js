import githubIcon from '../../../assets/svg/github.svg';

const Footer = () => (
  <foote>
    <p>
      <a href="https://github.com/DarekMazur">
        <img src={githubIcon} alt="GitHub" />
      </a>
    </p>
    <p>Darek Mazur &copy; {new Date().getFullYear()}</p>
  </foote>
);

export default Footer;
