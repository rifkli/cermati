import React, {useRef, useEffect} from 'react'
import Box from './Box'
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faPaintBrush, faTasks, faChartLine, faCubes, faBullhorn } from '@fortawesome/free-solid-svg-icons';
import {
    Container,
    Row,
    Col,
    Button,
    Input,
} from "reactstrap";

const Dashboard = () =>{
  const notifRef = useRef(null);
  const newsletterRef = useRef(null);
  const mainRef = useRef(null);

  const comment = <FontAwesomeIcon icon={faComments} />
  const brush = <FontAwesomeIcon icon={faPaintBrush} />
  const task = <FontAwesomeIcon icon={faTasks} />
  const chart = <FontAwesomeIcon icon={faChartLine} />
  const cube = <FontAwesomeIcon icon={faCubes} />
  const speaker = <FontAwesomeIcon icon={faBullhorn} />
  useEffect(() => {
    const notifHeight = notifRef.current.offsetHeight;
    mainRef.current.style.marginTop = `${notifHeight}px`;
  });

  const hideNotif = () => {
    const notifHeight = notifRef.current.offsetHeight;
    notifRef.current.style.marginTop = `-${notifHeight}px`;
    notifRef.current.style.transition = `all 300ms ease-out`;
    mainRef.current.style.marginTop = "0";
    mainRef.current.style.transition = `all 300ms ease-out`;
  };

  const hideNewsletter = () => {
    const newsletterHeight = newsletterRef.current.offsetHeight;
    newsletterRef.current.style.bottom = `-${newsletterHeight}px`;
    newsletterRef.current.style.transition = `all 300ms ease-out`;
  };
    return(
        <div>
        <Container fluid>
            <div ref={notifRef} className="notif">
                <div className="notif-content">
                    <div className="notif-text">
                        By accessing and using this website, you acknowledge that you have read and
                        understand out Cookie Policy, Privacy Policy, and our Terms of Service
                    </div>
                    <div className="notif-button">
                    <Button color="primary" onClick={hideNotif}>Got It</Button>
                    </div>
                </div>
            </div>
            <div ref={mainRef} id="main">
            <Row>
                  <Container fluid className="board">
                    <div>
                    <div className="board-heading">Hello! I'm Rifkli Danny Prakoso</div>
                    <div className="board-subheading">Consult, Design, and Develop Websites</div>
                    <div className="board-text">Have something great in mind? Feel free to contact me <br /> I'll help you to make it happen</div>
                    <Button id="btn" href="#services">LET'S MAKE CONTACT</Button>
                    </div>
                  </Container>
                
            </Row>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }} className="information">
                    <div>
                    <h1>How Can I Help You?</h1>
                    <p>
                    our work then targeted, best practice outcomes social innovation synergy. 
                    venture philanthropy, revolutionary inclusive polimarker relief, user-centered 
                    program areas scale</p>
                    </div>
                </Col>
            </Row>
                <Row>
                <div className="col-lg-4 col-md-6 d-flex">
                        <Box 
                            title="Consult"
                            logo={comment}
                            body="Co-create, design thinking; strengthen infrastructure resist granular. Revolution circular, 
                            movements or framework social impact low-hanging fruit. save the world compelling revolutinary progress"
                        />
                </div>
                <div className="col-lg-4 col-md-6 d-flex mt-4 mt-md-0">
                        <Box
                            title="Desing"
                            logo={brush}
                            body="Policymaker collaborates collective impact humanitarian shared value vocalbulary
                            inspire issue outcomes agile. Overcome injustice deep dive agile issue outcomes vibrant 
                            boots on the ground sustaineble"
                        />
                </div>
                <div className="col-lg-4 col-md-6 d-flex mt-4 mt-lg-0">
                         <Box
                            title="Develop"
                            logo={cube}
                            body="Revolutinary circular, movements a impact framework social impact low-hanging. Save
                            the compelling revolutionary inspire progress. Collective impacts and challenges for
                            opportunities of thought provoking"
                        />
                </div>
                <div className="col-lg-4 col-md-6 d-flex mt-4">
                        <Box 
                            title="Marketing"
                            logo={speaker}
                            body="Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary agile, replicable, effective
                            altruism youth. Mobilize commitment to overcome injustice resilient, uplift social transparent effective"
                        />
                </div>
                <div className="col-lg-4 col-md-6 d-flex mt-4">
                        <Box
                            title="Manage"
                            logo={task}
                            body="Change-makers innovation or shared unit of analysis. Overcome injustice outcomes strategize
                            vibrant boots on the ground substaineble. Optimism, effective altruism invest optimism cooperate social"
                        />
                </div>
                <div className="col-lg-4 col-md-6 d-flex mt-4">
                         <Box
                            title="Evolve"
                            logo={chart}
                            body="Activate catalyze and impact contextualize humanitarian. unit of analysis overcome injustice
                            storytelling altruism. Thought leadership mass incarceration. Outcomes big data, fairness, social game-changer."
                        />
                </div>
                </Row>
                </div>        
        </Container>
        <Footer />
        <div ref={newsletterRef} className="newsletter primary">
                    <Container>
                    <div className="newsletter-content">
                        <div className="newsletter-heading">
                            Get latest updates in web technologies
                        </div>
                        <div className="newsletter-text">
                            I write articles related to web technologies, such as design trends, development tools, UI/UX case studies and review,
                            and more. sign up to my newsletter to get them all
                        </div>
                        <div className="newsletter-contact">
                        <Col md="8">
                        <div className="newsletter-input">
                        <Row>
                        <Input type="text" block/>
                        </Row>
                        </div>
                        </Col>
                        <Col md="4">
                        <Row>
                        <Button onClick={hideNewsletter} style={{backgroundColor:"#cc6600"}} block>Got It</Button>
                        </Row>
                        </Col>  
                        </div> 
                    </div>
                    </Container>
                </div>
        </div>
    )
}

export default Dashboard;