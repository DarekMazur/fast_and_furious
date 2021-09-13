import CarsList from '../Components/organisms/CarsList/CarsList';
import Modal from '../Components/organisms/Modal/Modal';
import ToolBar from '../Components/organisms/ToolBar/ToolBar';
import Wrapper from '../Components/organisms/Wrapper/Wrapper';

const Dashboard = () => (
  <>
    <Wrapper>
      <ToolBar />
      <CarsList />
    </Wrapper>
    <Modal />
  </>
);

export default Dashboard;
