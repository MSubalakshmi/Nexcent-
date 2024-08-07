import React from 'react';
import { CssBaseline, Container } from '@mui/material';
import CombinedComponent from './components/CombinedComponent';

import Clients from './components/Clients';


import Footer from './components/Footer';

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <CombinedComponent />
      <Container>
        
        <Clients />
       
       
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default App;

