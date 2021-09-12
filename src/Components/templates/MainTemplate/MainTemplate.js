import Footer from '../../organisms/Footer/Footer';
import Header from '../../organisms/Header/Header';

const MainTemplate = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default MainTemplate;
