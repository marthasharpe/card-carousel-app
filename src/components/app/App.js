import React from 'react';
import { Container } from 'reactstrap';
import CardCarousel from '../cardCarousel/CardCarousel'
import Sort from './../sort/Sort';
import Signature from './../signature/Signature';
import './App.scss';

const App = () => {

  return (
    <Container fluid data-test='AppComponent'>
      <Sort />
      <CardCarousel />
      <Signature />
    </Container>
  );
}

export default App;
