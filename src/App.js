import React from 'react';
import { 
  Row,
  Col,
} from 'reactstrap';
import Cards from './Cards';


const App = () => {
  return (
    <div>
      <h1>Sort</h1>
      <Row>
        <Col xs="12" md="4" lg="3">
          <Cards />
        </Col>
      </Row>
    </div>
  );
}

export default App;
