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

    // // split data into data sets
    // let dataSets = [];   
    // for (let i = 0; i < props.data.length; i += 3) {
    //     let dataSet = props.data.slice(i, i + 3);
    //     dataSets.push(dataSet);
    // }
    // console.log(dataSets)
    
    // map data onto cards
    const items = props.data.map(obj => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={obj.Heading}
            >
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
            </CarouselItem>
        );
    });

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
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
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
                />
                {/* <Row> */}
                {items}
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