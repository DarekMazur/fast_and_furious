import githubIcon from '../../../assets/svg/github.svg';

const Footer = () => (
  <footer>
    <p>
      <a href="https://github.com/DarekMazur">
        <img src={githubIcon} alt="GitHub" />
      </a>
    </p>
    <p>Darek Mazur &copy; {new Date().getFullYear()}</p>
  </footer>
);

export default Footer;
