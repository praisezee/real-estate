import { useState } from 'react'
import {Container,Row,Col,Badge} from 'react-bootstrap'
import FilterSearch from './FilterSearch'
const Hero = () => {
  const [option,setOption] = useState('sell')
  return (
    <div className="img-bg vh-100 ">
      <div className="bg-black bg-opacity-50 h-100 pt-3">
        <Container className='h-100 d-flex align-items-center'>
          <Row className=' h-75 rounded rounded-4'>
            <Col xs={10} lg={6} className='mx-auto my-auto'>
              <Badge className='bg-secondary'>A vision of your life</Badge>
              <p className="h1 text-capitalize text-light text-shadow-dark">find your best</p>
              <p className="h1 text-capitalize text-warning text-shadow-dark">real estate</p>
              <p className="h6 text-light">Discover the keys to your home with APUS Real Estate - Your trusted partner in real estate excellence</p>
            </Col>
            <Col xs={12} lg={6} className='mx-auto my-auto'>
              <div>
                <div className='ps-2 mb-1'>
                  <span onClick={()=>setOption('buy')} role='button' className={option === 'buy' ? 'bg-warning text-dark h5 text-capitalize rounded-top px-3 py-1' : 'bg-light text-warning h5 text-capitalize rounded-top  px-3 py-1' }>buy</span>
                  <span onClick={()=>setOption('sell')} role='button' className={option === 'sell' ? 'bg-warning text-dark h5 text-capitalize rounded-top px-3 py-1 mx-3' : 'bg-light text-warning h5 text-capitalize rounded-top mx-3 px-3 py-1' }>Sell</span>
                  <span onClick={()=>setOption('rent')} role='button' className={option === 'rent' ? 'bg-warning text-dark h5 text-capitalize rounded-top px-3 py-1' : 'bg-light text-warning h5 text-capitalize rounded-top px-3 py-1'  }>Rent</span>
                </div>
                <div className='container'>
                  <FilterSearch option={option}/>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Hero
