import React from 'react';
import { Container } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import Pages from './../pages/Pages';
import Cards from './../cards/Cards';
import Sort from './../sort/Sort';
import './App.scss';

library.add(faImage);

const App = () => {

  return (
    <Container>
      <Sort />
      <Cards />
      <Pages />
    </Container>
  );
}

export default App;
