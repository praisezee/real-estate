import { Accordion, AccordionHeader, AccordionItem, Col, Container, Row } from "react-bootstrap"
import img from '../assets/hero.jpg'
import AccordionBody from "react-bootstrap/esm/AccordionBody"
import { BsArrowRight, BsCheck2Circle } from "react-icons/bs"
import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className="h-screen d-flex align-items-center bg-black text-white py-5">
      <Container>
        <p className="h3 text-capitalize mb-5"><span className="text-warning text-decoration-underline">about</span> us</p>
        <Row className="mb-5">
          <Col xs={10} md={6} lg={7} className="d-none d-lg-block mx-auto my-auto">
            <div className="relative border border-secondary rounded h-100">
              <img className="absolute img-fluid rounded" src={img}/>
            </div>
          </Col>
          <Col xs={10} lg={5} className="h-100 mx-auto my-auto mx-auto">
            <p className="h3 text-capitalize">we are the best and trusted <span className="text-warning">real estate</span> agent</p>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure culpa consequuntur, ex excepturi beatae quia assumenda. Nobis repudiandae excepturi error omnis quo perspiciatis voluptatibus officiis iusto libero, unde dolores dolor?</p>
            <Accordion>
              <AccordionItem eventKey="0" className="bg-dark text-light">
                <AccordionHeader className="text-light"><BsCheck2Circle/><span className="ms-3 my-auto">Quality Property </span>
                </AccordionHeader>
                <AccordionBody>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere labore dolore ullam, fugiat sapiente repellat suscipit nulla? Id nesciunt laboriosam velit enim libero perspiciatis nostrum facilis ipsam, excepturi placeat fugiat.
                </AccordionBody>
              </AccordionItem>
              <AccordionItem eventKey="1" className="bg-dark text-light">
                <AccordionHeader className="text-light">
                  <BsCheck2Circle/><span className="ms-3 my-auto">Quality Property </span>
                </AccordionHeader>
                <AccordionBody>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere labore dolore ullam, fugiat sapiente repellat suscipit nulla? Id nesciunt laboriosam velit enim libero perspiciatis nostrum facilis ipsam, excepturi placeat fugiat.
                </AccordionBody>
              </AccordionItem>
              <AccordionItem eventKey="2" className="bg-dark text-light">
                <AccordionHeader className="text-light ">
                  <BsCheck2Circle/><span className="ms-3 my-auto">Quality Property </span>
                </AccordionHeader>
                <AccordionBody>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere labore dolore ullam, fugiat sapiente repellat suscipit nulla? Id nesciunt laboriosam velit enim libero perspiciatis nostrum facilis ipsam, excepturi placeat fugiat.
                </AccordionBody>
              </AccordionItem>
            </Accordion>
          </Col>
        </Row>
        <Row className="mt-5 pt-5">
          <Col xs={10} lg={5} className="my-auto mx-auto">
            <p className="h3 text-capitalize">we are offering the best <span className="text-warning">real estate</span> deals</p>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure culpa consequuntur, ex excepturi beatae quia assumenda. Nobis repudiandae excepturi error omnis quo perspiciatis voluptatibus officiis iusto libero, unde dolores dolor?</p>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure culpa consequuntur, ex excepturi beatae quia assumenda. Nobis repudiandae excepturi error omnis quo perspiciatis voluptatibus officiis iusto libero, unde dolores dolor?</p>
            <div className="list-group">
              <p><BsArrowRight/> <span>A building with only one room and typically a steep pointy roof</span></p>
              <p><BsArrowRight/> <span>A building with only one room and typically a steep pointy roof</span></p>
              <p><BsArrowRight/> <span>A building with only one room and typically a steep pointy roof</span></p>
              <p><BsArrowRight/> <span>A building with only one room and typically a steep pointy roof</span></p>
              <p><BsArrowRight/> <span>A building with only one room and typically a steep pointy roof</span></p>
            </div>
            <Link className="btn btn-warning mt-4">View More</Link>
          </Col>
          <Col lg={7} className="d-none d-lg-block mx-auto my-auto">
            <div className="relative border border-secondary rounded h-100">
              <img className="absolute img-fluid rounded" src={img}/>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About
