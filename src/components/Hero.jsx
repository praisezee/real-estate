import { useState } from 'react'
import {Container,Row,Col,Badge} from 'react-bootstrap'
import FilterSearch from './FilterSearch'
import { FaHome,FaBuilding, FaHotel, FaWarehouse } from 'react-icons/fa'
import { BsHouseFill } from 'react-icons/bs'
const Hero = () => {
  const [option,setOption] = useState('sell')
  return (
    <div className="img-bg vh-100 ">
      <div className="bg-black bg-opacity-50 h-100 pt-3">
        <Container className='h-100 align-items-center'>
          <Row className='w-100 p-1 h-75 rounded rounded-4 mx-auto border border-5 border-danger'>
            <Col xs={10} lg={6} className='mx-auto my-auto'>
              <Badge className='bg-secondary'>A vision of your life</Badge>
              <p className="h1 text-capitalize text-light text-shadow-dark">find your best</p>
              <p className="h1 text-capitalize text-warning text-shadow-dark">real estate</p>
              <p className="h6 text-light">Discover the keys to your home with APUS Real Estate - Your trusted partner in real estate excellence</p>
            </Col>
            <Col xs={12} md={10} lg={6} className='mx-auto my-auto px-0'>
              <div className='ps-2 mb-1'>
                <span onClick={()=>setOption('buy')} role='button' className={option === 'buy' ? 'bg-warning text-dark h5 text-capitalize rounded-top px-3 py-1' : 'bg-light text-warning h5 text-capitalize rounded-top  px-3 py-1' }>buy</span>
                <span onClick={()=>setOption('sell')} role='button' className={option === 'sell' ? 'bg-warning text-dark h5 text-capitalize rounded-top px-3 py-1 mx-3' : 'bg-light text-warning h5 text-capitalize rounded-top mx-3 px-3 py-1' }>Sell</span>
                <span onClick={()=>setOption('rent')} role='button' className={option === 'rent' ? 'bg-warning text-dark h5 text-capitalize rounded-top px-3 py-1' : 'bg-light text-warning h5 text-capitalize rounded-top px-3 py-1'  }>Rent</span>
              </div>
              <div>
                <FilterSearch option={option}/>
              </div>
            </Col>
          </Row>
          <Row className='d-none d-md-flex justify-content-around align-items-center '>
            <p className='text-capitalize h3 text-light'><span className='text-warning text-decoration-underline'>property</span> types
            </p>
            <Col className='text-white text-center'>
              <div className="rounded-circle w-75 mx-auto bg-gradient bg-warning bg-opacity-75 py-4">
                <FaHome className='display-6 w-100'/>
              </div>
              <p className='h6 text-capitalize mb-0 mt-2'>private house</p>
              <Badge className='bg-secondary text-capitalize'>360 listing</Badge>
            </Col>
            <Col className='text-white text-center'>
              <div className="rounded-circle w-75 mx-auto bg-gradient bg-warning bg-opacity-75 py-4">
                <FaBuilding className='display-6 w-100'/>
              </div>
              <p className='h6 text-capitalize mb-0 mt-2'>Apartment</p>
              <Badge className='bg-secondary text-capitalize'>360 listing</Badge>
            </Col>
            <Col className='text-white text-center'>
              <div className="rounded-circle w-75 mx-auto bg-gradient bg-warning bg-opacity-75 py-4">
                <FaHotel className='display-6 w-100'/>
              </div>
              <p className='h6 text-capitalize mb-0 mt-2'>Exclusive Hotel</p>
              <Badge className='bg-secondary text-capitalize'>360 listing</Badge>
            </Col>
            <Col className='text-white text-center'>
              <div className="rounded-circle w-75 mx-auto bg-gradient bg-warning bg-opacity-75 py-4">
                <BsHouseFill className='display-6 w-100'/>
              </div>
              <p className='h6 text-capitalize mb-0 mt-2'>private room</p>
              <Badge className='bg-secondary text-capitalize'>360 listing</Badge>
            </Col>
            <Col className='text-white text-center'>
              <div className="rounded-circle w-75 mx-auto bg-gradient bg-warning bg-opacity-75 py-4">
                <FaWarehouse className='display-6 w-100'/>
              </div>
              <p className='h6 text-capitalize mb-0 mt-2'>warehouse</p>
              <Badge className='bg-secondary text-capitalize'>360 listing</Badge>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Hero
