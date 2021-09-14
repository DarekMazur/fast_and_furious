import Footer from '../../organisms/Footer/Footer';
import Header from '../../organisms/Header/Header';

const MainTemplate = ({ children }) => (
  <div className="containre-fluid bg-transparent">
    <Header />
    {children}
    <Footer />
  </div>
);

export default MainTemplate;
