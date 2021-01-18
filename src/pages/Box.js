import React from 'react';
import {
    Card, CardBody, CardText, CardTitle, Row, Col, 
} from 'reactstrap';

const Box =(props)=>{
    const {title, logo, body} = props;
    return(
        <div>
            <Card>
                <CardBody>
                <CardTitle tag="h5">
                    <Row>
                        <Col >
                            {title}
                        </Col>
                        <Col  id="logo">
                           <div className="logo" >{logo}</div> 
                        </Col>
                    </Row>
                </CardTitle>
                <CardText>
                {body}
                </CardText>
                </CardBody>
            </Card>
        </div>
    )
}
export default Box;