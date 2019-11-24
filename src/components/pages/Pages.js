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
import './Pages';

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

const Pages = (props) => {

    const cards = props.data.map(obj => {
        return (
            <Card className="shadow rounded"
                style={{width: 240, height: 340}}
                key={obj.Heading}>
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

export default connect(mapStateToProps, null)(Pages);