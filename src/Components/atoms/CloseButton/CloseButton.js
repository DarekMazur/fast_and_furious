import { Button } from 'react-bootstrap';

const CloseButton = (props) => {
  return (
    <Button {...props} className="mx-2 bg-warning">
      Close
    </Button>
  );
};

export default CloseButton;
