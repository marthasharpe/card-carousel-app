import React from 'react';
import { connect } from 'react-redux';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardImg,
    CardFooter,
} from 'reactstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './CardCarousel.scss';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 6,
        slidesToSlide: 6
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1
    },
};

const CardCarousel = (props) => {

    const cards = props.data.map(obj => {
        return (
            <Card className="shadow rounded"
                style={{width: 220, height: 340}}
                key={obj.Heading}>
                {/* display image if in json data */}
                {obj.showBridge ? 
                    <CardImg top src="https://res.cloudinary.com/bguggie/image/upload/v1425514888/wide_ggbridge_bg_teneax.jpg" alt="golden gate bridge"/>
                    :
                    <CardImg top src="https://res.cloudinary.com/bguggie/image/upload/v1425514882/darktiles_bg_gike55.jpg" alt="black background"/>}
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
        )
    })
    
    return (
        <Carousel responsive={responsive}>
            {cards}
        </Carousel>
  )
}

const mapStateToProps = ({ data }) => ({
    data
})

export default connect(mapStateToProps, null)(CardCarousel);