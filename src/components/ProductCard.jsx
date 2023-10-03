/* eslint-disable react/prop-types */
import { Card, CardBody, CardFooter, CardText, CardTitle, Col } from "react-bootstrap"
import { FaBed, FaMapMarkerAlt, FaRestroom } from "react-icons/fa"
import { Link } from "react-router-dom"
import { BsDot } from "react-icons/bs"

const ProductCard = ({img}) => {
  return (
    <Col xs={10} md={6} lg={4} xxl={3} className="mx-auto">
      <Card className="bg-black text-light shadow">
        <Card.Img src={img} height={200}/>
        <CardBody>
          <CardTitle className="text-capitalize fw-bold">The Most Luaxarious House</CardTitle>
          <CardText>
            <FaMapMarkerAlt className="my-auto"/> <span className="text-capitalize my-auto h-6">ibadan,nigeria</span></CardText>
            <div className="d-flex justify-content-between">
              <CardText>
                <FaBed/>
                <span className="text-capitalize ms-1"> 3 bedroom</span>
              </CardText>
              <CardText>
                <BsDot className="fs-3"/>
              </CardText>
              <CardText>
                <FaRestroom/>
                <span className="text-capitalize ms-1"> 2 bathroom</span>
              </CardText>
            </div>
        </CardBody>
        <CardFooter className="border-top border-light d-flex justify-content-between py-4">
          <p className="h4 text-warning">$5000/<span className="h6 text-warning-emphasis">year</span></p>
          <Link className="btn btn-secondary text-capitalize">view more</Link>
        </CardFooter>
      </Card>
    </Col>
  )
}

export default ProductCard
