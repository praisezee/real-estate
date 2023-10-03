import { Col, Container, Row } from "react-bootstrap"
import img from '../assets/hero.jpg'

const About = () => {
  return (
    <div className="h-screen d-flex align-items-center bg-black text-white">
      <Container>
        <Row>
          <Col xs={10} className="h-100">
            <div className="relative border rounded-4 h-100">
              <img className="absolute img-fluid rounded-4" src={img}/>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About
