import { Accordion, AccordionHeader, AccordionItem, Col, Container, Row } from "react-bootstrap"
import img from '../assets/hero.jpg'
import AccordionBody from "react-bootstrap/esm/AccordionBody"

const About = () => {
  return (
    <div className="h-screen d-flex align-items-center bg-black text-white">
      <Container>
        <p className="h3 text-capitalize mb-5"><span className="text-warning text-decoration-underline">about</span> us</p>
        <Row>
          <Col xs={10} md={6} lg={7} className="h-100 mx-auto my-auto">
            <div className="relative border border-secondary rounded-4 h-100">
              <img className="absolute img-fluid rounded-4" src={img}/>
            </div>
          </Col>
          <Col xs={10} md={6} lg={5}>
            <p className="h3 text-capitalize">we are the best and trusted <span className="text-warning">real estate</span> agent</p>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure culpa consequuntur, ex excepturi beatae quia assumenda. Nobis repudiandae excepturi error omnis quo perspiciatis voluptatibus officiis iusto libero, unde dolores dolor?</p>
            <Accordion>
              <AccordionItem eventKey="0" className="bg-dark text-light">
                <AccordionHeader className="text-light">
                  Quality Property 
                </AccordionHeader>
                <AccordionBody>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere labore dolore ullam, fugiat sapiente repellat suscipit nulla? Id nesciunt laboriosam velit enim libero perspiciatis nostrum facilis ipsam, excepturi placeat fugiat.
                </AccordionBody>
              </AccordionItem>
              <AccordionItem eventKey="1" className="bg-dark text-light">
                <AccordionHeader className="text-light">
                  Quality Property 
                </AccordionHeader>
                <AccordionBody>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere labore dolore ullam, fugiat sapiente repellat suscipit nulla? Id nesciunt laboriosam velit enim libero perspiciatis nostrum facilis ipsam, excepturi placeat fugiat.
                </AccordionBody>
              </AccordionItem>
              <AccordionItem eventKey="2" className="bg-dark text-light">
                <AccordionHeader className="text-light ">
                  Quality Property 
                </AccordionHeader>
                <AccordionBody>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere labore dolore ullam, fugiat sapiente repellat suscipit nulla? Id nesciunt laboriosam velit enim libero perspiciatis nostrum facilis ipsam, excepturi placeat fugiat.
                </AccordionBody>
              </AccordionItem>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About
