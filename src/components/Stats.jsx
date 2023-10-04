/* eslint-disable react/prop-types */
import {  Col, Container, Row } from "react-bootstrap"
import { FaCrown, FaFaceSmile, FaHouse, FaTrophy } from 'react-icons/fa6'

const Cards = ({icons, title, text}) =>{
  return(
    <div className="text-center border rounded py-4 text-warning">
      <p>{icons}</p>
      <p className="h3 fw-bold text-light">{title}</p>
      <p className="text-secondary">{text}</p>
    </div>
  )
}

const Stats = () => {
  return (
    <div className="bg-dark py-5 text-light">
      <Container>
        <Row className="g-4">
          <Col xs={10} lg={3} className="mx-auto">
            <Cards icons={<FaCrown className="display-6"/>} title={`10.6K`} text='Premium property'/>
          </Col>
          <Col xs={10} lg={3} className="mx-auto">
            <Cards icons={<FaFaceSmile className="display-6"/>} title={`8600+`} text='Happy customer'/>
          </Col>
          <Col xs={10} lg={3} className="mx-auto">
            <Cards icons={<FaTrophy className="display-6"/>} title={`1200`} text='Award wining'/>
          </Col>
          <Col xs={10} lg={3} className="mx-auto">
            <Cards icons={<FaHouse className="display-6"/>} title={`750`} text='Years Experience'/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Stats
