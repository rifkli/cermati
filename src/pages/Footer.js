import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import {
    Container,
    Row,
    Col,
} from "reactstrap";

const Footer =()=>{
    const copyright = <FontAwesomeIcon icon={faCopyright} />
    return(
        <div className="footer"> 
        <Container>
        <h4>{copyright} 2021 Rifkli Danny Prakoso. All rights reserved</h4>
        </Container>
        </div>
    )
}
export default Footer