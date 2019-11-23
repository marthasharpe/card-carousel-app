import React, { useState } from 'react';
import {
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

const CardCarousel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    
    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === props.data.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? props.data.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    //map data onto cards
    const cards = props.data.map((item) => {
        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.Heading}
          >
                <Card
                    style={{width:"200px", height:"100%"}}
                    className="shadow rounded"
                >
                    {item.showBridge ? <CardImg top height="150px" width="100%" src="https://ih0.redbubble.net/image.9487584.0600/pp,550x550.jpg" alt="golden gate bridge"/> : <CardImg top height="150px" width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbmDSPoVhPaWkpmlsCFKh4HTbEjnobbuks8SJBAkUA7a7RZEGr&s" alt="black background"/>}
                    <CardBody>
                        <CardTitle
                            className="text-capitalize"
                        >
                        {item.Heading}
                        </CardTitle>
                        <CardSubtitle
                            className="text-capitalize"
                        >
                        <small>{item.Subheading}</small>
                        </CardSubtitle>
                    </CardBody>
                    <CardFooter
                        className="text-success text-right"
                    >
                    ${item.Price.toString().replace(/(\d+)(?=(\d{3}))/g, '$1,')}
                    </CardFooter>
                </Card>
          </CarouselItem>
        );
      });

    return (
        <Carousel
            interval={false}
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            >
            <CarouselIndicators
                items={props.data}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
                />
            {cards}
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