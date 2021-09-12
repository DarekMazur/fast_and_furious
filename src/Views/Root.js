import CarsList from '../Components/organisms/CarsList/CarsList';
import MainTemplate from '../Components/templates/MainTemplate/MainTemplate';
import Modal from '../Components/templates/Modal/Modal';

const Root = () => (
  <MainTemplate>
    <CarsList />
    <Modal />
  </MainTemplate>
);

export default Root;
