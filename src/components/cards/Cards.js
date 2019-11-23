import React from 'react';
import {
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardImg,
    CardFooter,
} from 'reactstrap';
import { connect } from 'react-redux';

const Cards = (props) => {

    return (
        <Row style={{justifyContent: "center"}}>
            {props.data.map(item => (
                <Col
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
                </Col>
            ))}
        </Row>
    );
}

const mapStateToProps = ({ data }) => ({
    data
})

export default connect(mapStateToProps, null)(Cards);
