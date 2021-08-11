import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const NavBar: React.FC = () => {
    let history = useHistory();
    const goToPreviousPath = () => {
        history.goBack()
    }
    
    return (
      <div>
          <Button variant="secondary" onClick={goToPreviousPath}>Go Back</Button>
      </div>
    );
  }
  
  export default NavBar;