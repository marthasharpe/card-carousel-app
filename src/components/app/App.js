import React from 'react';
import { Container } from 'reactstrap';
import CardCarousel from '../cardCarousel/CardCarousel'
import Sort from './../sort/Sort';
import './App.scss';

const App = () => {

  return (
    <Container fluid data-test='AppComponent'>
      <Sort />
      <CardCarousel />
    </Container>
  );
}

export default App;
