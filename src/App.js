import React from 'react';
import {
  Container,
} from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import Cards from './Cards';
import Sort from './Sort';

library.add(faImage);

const App = () => {
  return (
    <Container className="align-items-center fluid">
      <Sort />
      <Cards />
    </Container>
  );
}

export default App;
