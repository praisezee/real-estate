/* eslint-disable react/prop-types */
import { Button, Col, FloatingLabel, FormSelect, Row } from "react-bootstrap";
import { BsGeoAlt, BsSearch } from 'react-icons/bs'


const Location = () =>{
  return(
    <div className="d-flex align-items-center">
    <BsGeoAlt className="my-auto fs-5 me-1"/>
    <p className="h5 fw-bold text-capitalize my-auto">location</p>
    </div>
  )
}

const FilterSearch = ({option}) => {
  console.log(option)
  return (
      <Row className="py-1 pe-2 bg-light bg-opacity-75 rounded">
        <Col xs={4} className="px-1 my-auto">
          <FloatingLabel label={<Location/>}>
            <FormSelect/>
          </FloatingLabel>
        </Col>
        <Col xs={3} className="px-1 my-auto">
          <FloatingLabel label={<p className="h5 fw-bold text-capitalize my-auto">property</p>}>
            <FormSelect>
              <option value="2">property</option>
            </FormSelect>
          </FloatingLabel>
        </Col>
        <Col xs={3} className="px-1 my-auto">
        <FloatingLabel label={<p className="h5 fw-bold text-capitalize my-auto">pice</p>}>
            <FormSelect>
              <option value="2">property</option>
            </FormSelect>
          </FloatingLabel>
        </Col>
        <Col xs={2} className="px-1 my-auto">
          <Button variant="warning" className="d-flex mx-auto w-100">
            <BsSearch className="fs-5 fw-bold"/>
            <span className="text-capitalize d-none d-md-block my-auto fw-bold ms-2">search</span>
          </Button>
        </Col>
      </Row>
  )
}

export default FilterSearch
