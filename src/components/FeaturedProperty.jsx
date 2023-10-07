/* eslint-disable react/prop-types */
import { Badge, Card, CardBody, CardImg, Col} from "react-bootstrap"
import {FaMapMarkerAlt, FaStar } from "react-icons/fa"

const FeaturedProperty = ({src,name,location,price}) => {
  return (
    <Col xs={6}>
      <Card className="bg-black text-light p-3">
        <CardImg src={src} alt="building" />
        <CardBody className="d-flex justify-content-between align-items-center">
          <div>
            <p className="h6 fw-bold text-capitalize text-white">{name}</p>
            <p className="text-capitalize text-secondary"><FaMapMarkerAlt/> {location}</p>
          </div>
          <Badge className="bg-success bg-opacity-25 text-success my-auto text-capitalize">for sale</Badge>
        </CardBody>
        <CardBody className="d-flex justify-content-between">
          <div>
            <FaStar className="text-warning"/>
            <FaStar className="text-warning"/>
            <FaStar className="text-warning"/>
            <FaStar className="text-warning"/>
            <FaStar className="text-warning"/>
          </div>
          <p className="text-light h6 fw-bold">$ {price}</p>
        </CardBody>
      </Card>
    </Col>
  )
}

export default FeaturedProperty
