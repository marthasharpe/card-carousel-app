import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
} from 'reactstrap';


const Carousel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    
    const goToNext = () => {
        if (animating) return;
        const nextIndex = activeIndex === props.data.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }
    
    const goToPrevious = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? props.data.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    return (
        <Carousel>
            <Row
                className="justify-content-center fluid"
                style={{height: "auto"}}
            >
                <CarouselIndicators
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                />                  
                    <CarouselItem
                        onExiting={() => setAnimating(true)}
                        onExited={() => setAnimating(false)}
                        key={item.Heading}
                    >
 
                    </CarouselItem>
                <CarouselControl
                    direction="prev"
                    directionText="Previous"
                    onClickHandler={goToPrevious}
                />
                <CarouselControl
                    direction="next"
                    directionText="Next"
                    onClickHandler={goToNext}
                />
            </Row>
        </Carousel>
    );
}

export default Carousel;