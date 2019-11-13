import React from 'react';
import { 
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg
} from 'reactstrap';


const App = () => {
  return (
    <div className="App">
      <h1>Sort</h1>
      <Row>
        <Col xs="12" md="4" lg="3">
          <Card className="shadow">
            <CardImg top width="100%" src="https://cdn.vox-cdn.com/thumbor/Md4vxxazIX3_4SAMluJvjEKCers=/0x0:655x365/920x613/filters:focal(249x23:353x127):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/55356661/spider_man_homecoming.0.jpg" alt="card pic" />
            <CardBody>
              <CardTitle className="text-capitalize">spider man</CardTitle>
              <CardSubtitle className="text-capitalize">is da bomb</CardSubtitle>
              <hr/>
              <CardText className="text-success text-right">$1,000,000</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default App;
