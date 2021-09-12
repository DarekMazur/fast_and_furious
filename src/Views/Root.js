import MainTemplate from '../Components/templates/MainTemplate/MainTemplate';
import CarsProvider from '../providers/CarsProvider';
import Dashboard from './Dashboard';

const Root = () => {
  return (
    <CarsProvider>
      <MainTemplate>
        <Dashboard />
      </MainTemplate>
    </CarsProvider>
  );
};

export default Root;
