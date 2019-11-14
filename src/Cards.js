import React, { useState } from 'react';
import {
    // Carousel,
    // CarouselItem,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardImg,
    CardFooter,
} from 'reactstrap';
import json from './UIE-InterviewProject'

const data = json;

const Cards = () => {
    // const [activeIndex, setActiveIndex] = useState(0);

    return (
        // <Carousel activeIndex={activeIndex}>
            <Row className="justify-content-center fluid" style={{height: "auto"}}>
        {data.map(item => (
        // <CarouselItem>
            <Col className="align-items-center fluid" key={item.Heading}>
                <Card style={{width:"200px", height:"100%"}} className="shadow rounded">
                    {item.showBridge ? <CardImg top height="150px" width="100%" src="https://ih0.redbubble.net/image.9487584.0600/pp,550x550.jpg" alt="golden gate bridge"/> : <CardImg top height="150px" width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbmDSPoVhPaWkpmlsCFKh4HTbEjnobbuks8SJBAkUA7a7RZEGr&s" alt="black background"/>}
                    <CardBody>
                        <CardTitle className="text-capitalize">{item.Heading}</CardTitle>
                        <CardSubtitle className="text-capitalize"><small>{item.Subheading}</small></CardSubtitle>
                    </CardBody>
                    <CardFooter className="text-success text-right">${item.Price}</CardFooter>
                </Card>
            </Col>
            // </CarouselItem>
            ))}
        </Row>
        // </Carousel>
    );
}

export default Cards;
