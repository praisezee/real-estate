import { Container, Row } from "react-bootstrap"
import ProductCard from "./ProductCard"
import img from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import { Link } from "react-router-dom"
import { FaArrowAltCircleRight } from "react-icons/fa"

const Property = () => {
  return (
    <div className="bg-dark text-light d-flex align-items-center h-screen py-5">
      <Container>
        <p className="text-capitalize h3 my-5">
          <span className="text-warning text-decoration-underline">popular</span> product deals
        </p>
        <Row className="g-5 mt-2">
          <ProductCard img={img}/>
          <ProductCard img={img2}/>
          <ProductCard img={img}/>
          <ProductCard img={img2}/>
          <ProductCard img={img}/>
          <ProductCard img={img2}/>
          <ProductCard img={img}/>
          <ProductCard img={img2}/>
        </Row>
        <div className="text-center my-5">
          <Link className="btn btn-warning">View More <FaArrowAltCircleRight/></Link>
        </div>
      </Container>
    </div>
  )
}

export default Property
