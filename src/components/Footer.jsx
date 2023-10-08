import { Col, Container, Row } from "react-bootstrap"
import { FaWhatsapp, FaXTwitter, FaFacebook, FaInstagram} from "react-icons/fa6"
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className="bg-dark text-light">
      <div className="py-4 h-100 img-world">
        <Container className=" h-100">
          <Row>
            <Col xs={10} md={3}>
              <p className="h4 text-uppercase">apus estates</p>
              <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
              <p className="text-capitalize my-3 h6">follow us</p>
              <div className="d-flex justify-content-between">
                <Link className="bg-secondary nav-link p-1 rounded bg-opacity-50">
                  <FaFacebook className="fs-4"/>
                </Link>
                <Link className="bg-secondary nav-link p-1 rounded bg-opacity-50">
                  <FaInstagram className="fs-4"/>
                </Link>
                <Link className="bg-secondary nav-link p-1 rounded bg-opacity-50">
                  <FaXTwitter className="fs-4"/>
                </Link>
                <Link className="bg-secondary nav-link p-1 rounded bg-opacity-50">
                  <FaWhatsapp className="fs-4"/>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Footer
