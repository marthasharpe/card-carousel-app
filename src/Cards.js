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

const Cards = () => {

    const data = [
        {
            Heading: "spider man",
            Subheading: "is da bomb",
            Price: 1000000,
        },
        {
            Heading: "spider man",
            Subheading: "is da bomb",
            Price: 1000000,
            showBridge: true,
        },
        {
            Heading: "spider man",
            Subheading: "is da bomb",
            Price: 1000000,
        },
        {
            Heading: "spider man",
            Subheading: "is da bomb",
            Price: 1000000,
        },
    ]

    //const pic = 

  return (
    <div>
        <Row>
            {data.map(item => (
            <Col key={item.Heading}>
                <Card style={{width:"300px", height:"auto"}} className="shadow">
                    {item.showBridge ? <CardImg top height="150px" width="100%" src="https://ih0.redbubble.net/image.9487584.0600/pp,550x550.jpg" alt="golden gate bridge"/> : <CardImg top height="150px" width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbmDSPoVhPaWkpmlsCFKh4HTbEjnobbuks8SJBAkUA7a7RZEGr&s" alt="black background"/>}
                    <CardBody>
                        <CardTitle className="text-capitalize">{item.Heading}</CardTitle>
                        <CardSubtitle className="text-capitalize"><small>{item.Subheading}</small></CardSubtitle>
                        <hr/>
                        <CardText className="text-success text-right">${item.Price}</CardText>
                    </CardBody>
                </Card>
            </Col>))}
        </Row>
    </div>
  );
}

export default Cards;
