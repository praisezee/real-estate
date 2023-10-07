import { Card, CardBody, CardFooter, Col, Container, Row } from "react-bootstrap"
import img from '../assets/img1.jpg'
import { FaStar } from "react-icons/fa"

const TestimonyCard = () =>{
  return(
    <Card className="position-relative bg-dark text-secondary">
      <img src={img} className="position-absolute rounded-circle bottom-85 end-80" width={50} height={50} alt="" />
      <CardBody className="text-start mt-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur dolore deleniti iusto sint eum sapiente ut nisi beatae similique, voluptates neque expedita recusandae illum possimus? 
      </CardBody>
      <CardFooter className=" border-top border-secondary">
        <div className="d-flex justify-content-between">
          <div>
            <p className="h6 text-capitalize fw-bold">Christopher j. larison</p>
            <p className="h6 text capitalize text-secondary">service manager</p>
          </div>
          <div>
            <FaStar className="text-warning"/>
            <FaStar className="text-warning"/>
            <FaStar className="text-warning"/>
            <FaStar className="text-warning"/>
            <FaStar className="text-warning"/>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

const Testimony = () => {
  return (
    <div className="bg-black text-light py-5">
      <Container>
        <p className="h3 text-capitalize mb-5">what our <span className="text-warning">clients say</span>
        <hr className="w-10" />
        </p>
        <Row className="text-center g-5">
          <Col xs={10} md={8} lg={4} className="mx-auto">
            <TestimonyCard/>
          </Col>
          <Col xs={10} md={8} lg={4} className="mx-auto">
            <TestimonyCard/>
          </Col>
          <Col xs={10} md={8} lg={4} className="mx-auto">
            <TestimonyCard/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Testimony
