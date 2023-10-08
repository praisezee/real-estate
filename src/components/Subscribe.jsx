import { Button, Col, Container, FormControl, Row } from "react-bootstrap"
import img from "../assets/img2.png"

const Subscribe = () => {
  return (
    <div className="bg-black text-white py-4">
      <Container>
        <Row className="bg-warning bg-opacity-25 text-warning rounded-4 py-3">
          <Col xs={7} className="px-5 py-4 my-auto">
            <p className="h4 mb-4">Subscribe to get the latest news for you!</p>
            <div className="d-flex justify-content-between px-2 py-2 rounded bg-secondary bg-opacity-50">
            <FormControl placeholder="Enter your email" type="email" className="w-65 border-0 bg-light bg-opacity-50"/>
            <Button variant="warning">Subscribe</Button>
            </div>
          </Col>
          <Col xs={5} className="my-auto">
            <img src={img} className="img-fluid"/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Subscribe
