import React from 'react';
import {
  Container
} from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import Cards from './Cards';

library.add(faImage);


const App = () => {
  return (
    <Container className="align-items-center fluid">
      <h1>Sort</h1>
      <Cards />
    </Container>
  );
}

export default App;
