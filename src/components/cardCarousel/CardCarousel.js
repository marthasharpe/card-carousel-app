import React, { useState } from 'react';
import {
    // Row,
    // Col,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardImg,
    CardFooter,
} from 'reactstrap';
import { connect } from 'react-redux';
import './CardCarousel.scss';


const CardCarousel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
 
    // map data onto cards
    const cards = props.data.map((obj) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={obj.Heading}
            >
                {/* <Col> */}
                    <Card className="shadow rounded">
                        {/* display image if in json data */}
                        {obj.showBridge ? 
                            <CardImg top height="150px" width="100%" src="https://ih0.redbubble.net/image.9487584.0600/pp,550x550.jpg" alt="golden gate bridge"/>
                            :
                            <CardImg top height="150px" width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbmDSPoVhPaWkpmlsCFKh4HTbEjnobbuks8SJBAkUA7a7RZEGr&s" alt="black background"/>}
                        <CardBody>
                            <CardTitle className="text-capitalize">
                                {obj.Heading}
                            </CardTitle>
                            <CardSubtitle className="text-capitalize">
                                <small>{obj.Subheading}</small>
                            </CardSubtitle>
                        </CardBody>
                        <CardFooter className="text-success text-right">
                            ${obj.Price.toString().replace(/(\d+)(?=(\d{3}))/g, '$1,')}
                        </CardFooter>
                    </Card>
                {/* </Col> */}
            </CarouselItem>
        );
    });

    // split cards into sets
    let cardSets = [];   
    for (let i = 0; i < cards.length; i += 3) {
        let cardSet = cards.slice(i, i + 3);
        cardSets.push(cardSet);
    }
    console.log(cardSets);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === cards.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? cards.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    return (
        <Carousel
            interval={false} //disables autoslide
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            >
            <CarouselIndicators
                items={cardSets}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
                />
                {/* <Row> */}
                {cards}
                {/* </Row> */}
            <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
                />
            <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
                />
        </Carousel>
    );
}

const mapStateToProps = ({ data }) => ({
    data
})

export default connect(mapStateToProps, null)(CardCarousel);