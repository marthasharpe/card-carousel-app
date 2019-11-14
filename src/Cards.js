import React, { useState } from 'react';
import {
    // Carousel,
    // CarouselItem,
    // CarouselControl,
    // CarouselIndicators,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardImg,
    CardFooter,
} from 'reactstrap';


const Cards = (props) => {
    // const [activeIndex, setActiveIndex] = useState(0);
    // const [animating, setAnimating] = useState(false);
    
    // const next = () => {
    //     if (animating) return;
    //     const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    //     setActiveIndex(nextIndex);
    // }
    
    // const previous = () => {
    //     if (animating) return;
    //     const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    //     setActiveIndex(nextIndex);
    // }

    // const goToIndex = (newIndex) => {
    //     if (animating) return;
    //     setActiveIndex(newIndex);
    // }

    return (
        // <Carousel activeIndex={activeIndex} next={next} previous={previous}>
            <Row className="justify-content-center fluid" style={{height: "auto"}}>
            {/* <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} /> */}
        {props.data.map(item => (
        // <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.Heading}>
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
            {/* <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} /> */}
        </Row>
        // </Carousel>
    );
}

export default Cards;
