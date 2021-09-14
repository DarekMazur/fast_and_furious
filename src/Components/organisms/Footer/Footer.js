import githubIcon from '../../../assets/svg/github.svg';

const Footer = () => (
  <footer className="container-fluid d-flex align-items-center justify-content-center mt-4">
    <p>
      <a href="https://github.com/DarekMazur">
        <img src={githubIcon} alt="GitHub" />
      </a>
    </p>
    <p className="mx-2">Darek Mazur &copy; {new Date().getFullYear()}</p>
  </footer>
);

export default Footer;
