import { Carousel, CarouselItem, Container, Row } from "react-bootstrap"
import FeaturedProperty from "./FeaturedProperty"
import img from '../assets/hero.jpg'
import img1 from "../assets/img1.jpg"

const Featured = () => {
  return (
    <div className="bg-dark text-white h-screen d-flex align-items-center">
      <Container>
        <p className="text-capitalize h3">featured <span className="text-warning">properties</span></p>
        <hr className="w-25" />
        <Carousel>
          <CarouselItem>
            <Container>
              <Row>
                <FeaturedProperty name='A modern house accentuates' location='4059 waterview texico, nm 88135' src={img} price="4,050"/>
                <FeaturedProperty name="capital hill residence in new york" location="1758 lake floyd circle, DE 19707" price="3,500" src={img1}/>
              </Row>
            </Container>
          </CarouselItem>
          <CarouselItem>
            <Container>
              <Row>
                <FeaturedProperty name='A modern house accentuates' location='4059 waterview texico, nm 88135' src={img} price="4,050"/>
                <FeaturedProperty name="capital hill residence in new york" location="1758 lake floyd circle, DE 19707" price="3,500" src={img1}/>
              </Row>
            </Container>
          </CarouselItem>
          <CarouselItem>
            <Container>
              <Row>
                <FeaturedProperty name='A modern house accentuates' location='4059 waterview texico, nm 88135' src={img} price="4,050"/>
                <FeaturedProperty name="capital hill residence in new york" location="1758 lake floyd circle, DE 19707" price="3,500" src={img1}/>
              </Row>
            </Container>
          </CarouselItem>
          <CarouselItem>
            <Container>
              <Row>
                <FeaturedProperty name='A modern house accentuates' location='4059 waterview texico, nm 88135' src={img} price="4,050"/>
                <FeaturedProperty name="capital hill residence in new york" location="1758 lake floyd circle, DE 19707" price="3,500" src={img1}/>
              </Row>
            </Container>
          </CarouselItem>
        </Carousel>
      </Container>
    </div>
  )
}

export default Featured
